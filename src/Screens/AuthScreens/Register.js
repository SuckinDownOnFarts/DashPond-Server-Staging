import { useState, useEffect } from 'react';
import { generatePath, useNavigate } from 'react-router-dom';
import api from '../../api/axios';
import { Box, Progress, TextInput, PasswordInput, Anchor, Paper, Title, Text, Button, Popover, useMantineTheme, Image, Container } from '@mantine/core';
import { useForm } from '@mantine/form';
import { IconCheck, IconX } from '@tabler/icons-react';
import useAuth from '../../hooks/useAuth';
import { registerStyles as useStyles } from './AuthStyles/AuthStyles';


const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{6,24}/;
const FIRSTNAME_REGEX = /^[a-z ,.'-]+$/i;
const LASTNAME_REGEX = /^[a-z ,.'-]+$/i;
const PHONE_REGEX = /^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;

function PasswordRequirement({ meets, label }) {
    return (
        <Text
            color={meets ? 'teal' : 'red'}
            sx={{ display: 'flex', alignItems: 'center' }}
            mt={7}
            size="sm"
        >
            {meets ? <IconCheck size="0.9rem" /> : <IconX size="0.9rem" />} <Box ml={10}>{label}</Box>
        </Text>
    );
}

const requirements = [
    { re: /[0-9]/, label: 'Includes number' },
    { re: /[a-z]/, label: 'Includes lowercase letter' },
    { re: /[A-Z]/, label: 'Includes uppercase letter' },
    { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: 'Includes special symbol' },
];

function getStrength(password) {
    let multiplier = password.length > 5 ? 0 : 1;

    requirements.forEach((requirement) => {
        if (!requirement.re.test(password)) {
            multiplier += 1;
        }
    });

    return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 0);
}

const Register = () => {
    const { classes, theme } = useStyles();
    const { auth, setAuth, setPersist } = useAuth();
    const navigate = useNavigate();
    const [popoverOpened, setPopoverOpened] = useState(false);

    useEffect(() => {
        const checkIfUserIsLoggedIn = () => {
            if (auth?.accessToken) {
                navigate('/already+logged+in')
            }
        }
        checkIfUserIsLoggedIn()
    }, [])

    const form = useForm({
        initialValues: {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            password: '',
        },
        validate: (values) => ({
            firstName:
                values.firstName.length === 0
                    ? 'First name is required'
                    : FIRSTNAME_REGEX.test(values.firstName)
                        ? null
                        : 'First name should only contain certain characters',
            lastName:
                values.lastName.length === 0
                    ? 'Last name is required'
                    : LASTNAME_REGEX.test(values.lastName)
                        ? null
                        : 'Last name should only contain certain characters',
            phone:
                values.phone.length === 0
                    ? 'Phone number is required'
                    : PHONE_REGEX.test(values.phone)
                        ? null
                        : 'Phone number is invalid',
            email:
                values.email.length === 0
                    ? 'Email is required'
                    : EMAIL_REGEX.test(values.email)
                        ? null
                        : 'Invalid email format',
            password:
                values.password.length === 0
                    ? 'Password is required'
                    : PWD_REGEX.test(values.password)
                        ? null
                        : 'Invalid password format'
        })
    });

    const strength = getStrength(form.values.password);
    const color = strength === 100 ? 'teal' : strength > 50 ? 'yellow' : 'red';

    const checks = requirements.map((requirement, index) => (
        <PasswordRequirement key={index} label={requirement.label} meets={requirement.re.test(form.values.password)} />
    ));

    const submitRegistration = async (data) => {
        try {
            const response = await api.post('/register', (data));
            console.log(response?.data);
            const firstName = response?.data?.firstName
            const lastName = response?.data?.lastName
            const accessToken = response?.data?.accessToken;
            const id = response?.data?.id;
            const roles = response?.data?.roles;
            const email = response?.data?.email;


            setAuth({ firstName, lastName, accessToken, id, roles, email });
            const path = generatePath('/profile/:id/info', {
                id: id
            });

            setPersist(true);
            localStorage.setItem("persist", true);
            navigate(path);

        } catch (err) {
            if (err?.response?.status === 409) {
                // form.setErrors('root.serverError', { 
                //     type: err.response.status,
                // })
            }
            // else if (err?.response?.status === 400) {
            //     setError('root.serverError', { 
            //         type: err.response.status,
            //     })
            // } 
        }
    }



    return (
        <div className='mt-8'>
            <Container>
                <div className={classes.inner}>
                    <div className={classes.content}>
                        <Title
                            align="center"
                            sx={(theme) => ({ fontFamily: `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}
                            color={theme.colorScheme === 'dark' ? 'white' : 'black'}
                        >
                            Welcome!
                        </Title>
                        <Text color="dimmed" size="sm" align="center" mt={5}>
                            Already have a Dashpond account?{' '}
                            <Anchor size="sm" component="button" onClick={() => navigate('/login')}>
                                Sign in
                            </Anchor>
                        </Text>

                        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
                            <form onSubmit={form.onSubmit((values) => submitRegistration(values))}>
                                <div className='flex flex-row space-x-4'>
                                    <TextInput
                                        withAsterisk
                                        label="First Name"
                                        placeholder="John"
                                        {...form.getInputProps('firstName')}
                                    />
                                    <TextInput
                                        withAsterisk
                                        label="Last Name"
                                        placeholder="Smith"
                                        {...form.getInputProps('lastName')}
                                    />
                                </div>

                                <TextInput
                                    withAsterisk
                                    label="Phone"
                                    placeholder="123 456 7890"
                                    {...form.getInputProps('phone')}
                                />

                                <TextInput
                                    withAsterisk
                                    label="Email"
                                    placeholder="you@daspond.com"
                                    {...form.getInputProps('email')}
                                />
                                <Popover opened={popoverOpened} position="bottom" width="target" transitionProps={{ transition: 'pop' }}>
                                    <Popover.Target>
                                        <div
                                            onFocusCapture={() => setPopoverOpened(true)}
                                            onBlurCapture={() => setPopoverOpened(false)}
                                        >
                                            <PasswordInput
                                                withAsterisk
                                                // value={value}
                                                // onChange={setValue}
                                                label="Your password"
                                                placeholder="Your password"
                                                {...form.getInputProps('password')}
                                            />
                                        </div>
                                    </Popover.Target>
                                    <Popover.Dropdown>
                                        <Progress color={color} value={strength} size={5} mb="xs" />
                                        <PasswordRequirement label="Includes at least 6 characters" meets={form.values.password.length > 5} />
                                        {checks}
                                    </Popover.Dropdown>
                                </Popover>
                                <Button
                                    fullWidth
                                    mt="xl"
                                    type='submit'
                                >
                                    Register
                                </Button>
                            </form>
                        </Paper>
                    </div>


                    <Image src={theme.colorScheme === 'dark' ? '/images/Auth/orange-register.svg' : '/images/Auth/pink-register.svg'} className={classes.image} />
                </div>
            </Container>
        </div>

    )
}

export default Register
