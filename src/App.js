import React, { useEffect, useState, lazy } from 'react';
import { MantineProvider, ColorSchemeProvider } from '@mantine/core';
import { Route, Routes } from 'react-router-dom';
/////////////////////////////////////////////**************LAYOUT*************///////////////////////////////////////////////////////////
import Layout from './components/LayoutGlobals/Layout';
/////////////////////////////////////////////**************SCREENS*************///////////////////////////////////////////////////////////
const DPLayout = lazy(() => import ('./Screens/MarketReport/Layout/DPLayout'));
const Missing = lazy(() => import ('./Screens/404/Missing'));
const Contact = lazy(() => import ('./Screens/Contact/Contact'));
/////////////////////////////////////////////**************CREATE DATA PROFILE SCREENS*************///////////////////////////////////////////////////////////
const AddressInput = lazy(() => import ('./Screens/Property_Search/AddressInput'));
const DashLayout = lazy(() => import ('./Screens/Property_Search/Layout/DashLayout'));
const MapModal = lazy(() => import ('./Screens/Property_Search/MapModal'));
/////////////////////////////////////////////**************MARKET REPORTS SCREENS*************///////////////////////////////////////////////////////////
const CheckReportId = lazy(() => import ('./components/Auth/CheckReportId'));
const Overview = lazy(() => import ('./Screens/MarketReport/Sections/KeyTrends/KTLayout'));
const MapsLayout = lazy(() => import ('./Screens/MarketReport/Sections/Maps/MapsLayout'));
const PopLayout = lazy(() => import ('./Screens/MarketReport/Sections/Population/PopLayout'));
const EmploymentIncomeLayout = lazy(() => import ('./Screens/MarketReport/Sections/Employment/EmploymentLayout'));
const EducationLayout = lazy(() => import ('./Screens/MarketReport/Sections/Education/EducationLayout'));
const HousingLayout = lazy(() => import ('./Screens/MarketReport/Sections/Housing/HousingLayout'));
/////////////////////////////////////////////**************AUTH SCREENS*************///////////////////////////////////////////////////////////
const Register = lazy(() => import ('./Screens/AuthScreens/Register'));
const Login = lazy(() => import ('./Screens/AuthScreens/Login'));
const RequireAuth = lazy(() => import ('./components/Auth/RequireAuth'));
const PersistLogin = lazy(() => import ('./components/Auth/PersistLogin'));
const AlreadyLoggedIn = lazy(() => import ('./Screens/AuthScreens/AlreadyLoggedIn'));
/////////////////////////////////////////////**************USER PROFILE SCREENS*************///////////////////////////////////////////////////////////
const RequireProfileAuth = lazy(() => import ('./components/Auth/RequireProfileAuth'));
const ProfileLayout = lazy(() => import ('./Screens/Profile/Layout/ProfileLayout'));
const Info = lazy(() => import ('./Screens/Profile/Info/InfoLayout'));
const DataProfiles = lazy(() => import ('./Screens/Profile/User_DataProfiles/DataProfilesLayout'));
/////////////////////////////////////////////**************AUTH SCREENS*************///////////////////////////////////////////////////////////
const HomeLayout = lazy(() => import ('./Screens/Home/HomeLayout'));

const ROLES = {
    'User': 10,
    'Customer': 12,
    'Admin': 11
};

function App() {
    const [colorScheme, setColorScheme] = useState(localStorage.getItem('colorScheme'));
    const toggleColorScheme = () => setColorScheme(colorScheme === 'dark' ? 'light' : 'dark');

    useEffect(() => {
        const getColorScheme = () => {
            if (window.matchMedia("(prefers-color-scheme: dark)").matches && localStorage.getItem('colorScheme') === 'dark') {
                setColorScheme('dark')
            } else {
                setColorScheme('light')
            }
        }
        getColorScheme()
    }, [])

    useEffect(() => {
        const setColorScheme = () => {
            if (colorScheme === 'dark') {
                localStorage.setItem("colorScheme", "dark");
            }
            if (colorScheme === 'light') {
                localStorage.setItem("colorScheme", "light");
            }
        }
        setColorScheme()
    }, [toggleColorScheme])



    return (
        <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
            <MantineProvider
                theme={{
                    colorScheme,
                    primaryColor: colorScheme === 'dark' ? 'orange' : 'pink'
                }}
                withGlobalStyles
                withNormalizeCSS
            >
                <Routes>
                    <Route element={<PersistLogin />}>
                        <Route path='/' element={<Layout />}>
                            <Route index element={<HomeLayout />} /> {/* Homepage Route */}

                            {/*********************** USER PROFILES ******************************/}
                            <Route element={<RequireAuth allowedRoles={[ROLES.Customer, ROLES.Admin, ROLES.User]} />}>
                                <Route element={<RequireProfileAuth />}>
                                    <Route path='profile/:id' element={<ProfileLayout />}>
                                        <Route path='info' element={<Info />} />
                                        <Route path='data+profiles' element={<DataProfiles />} />
                                    </Route>
                                </Route>
                            </Route>

                            {/*********************** DEMOGRAPHIC PROFILES ******************************/}
                            <Route element={<CheckReportId />}>
                                <Route path='/market+report/:id' element={<DPLayout />}> {/* Dashboards */}
                                    <Route path='key+trends' index element={<Overview />} />
                                    <Route path='population' index element={<PopLayout />} />
                                    <Route path='employment+income' index element={<EmploymentIncomeLayout />} />
                                    <Route path='education' index element={<EducationLayout />} />
                                    <Route path='housing' index element={<HousingLayout />} />
                                    {/* <Route path='income+earnings' index element={<IncomeLayout />} /> */}
                                    <Route path='map+views' index element={<MapsLayout />} />
                                </Route>
                            </Route>

                            {/*********************** PRODUCTS ******************************/}
                            <Route element={<RequireAuth allowedRoles={[ROLES.Customer, ROLES.Admin]} />}>
                                <Route path='property+search' element={<DashLayout />}> {/*Input for paying cutomers */}
                                    <Route path='address+input' element={<AddressInput />} />
                                    <Route path='address+input/map+confirmation' element={<MapModal />} />
                                </Route>
                            </Route>

                            {/*********************** CONTACT ******************************/}
                            <Route path='contact' element={<Contact />} />

                            {/*********************** 404 MISSING  ******************************/}
                            <Route path='*' element={<Missing />} /> {/* 404 Route */}

                            {/*********************** AUTH SCREENS ******************************/}
                            <Route path='login' element={<Login />} />
                            <Route path='register' element={<Register />} />
                            <Route path='already+logged+in' element={<AlreadyLoggedIn />} />
                        </Route>
                    </Route>
                </Routes>
            </MantineProvider>
        </ColorSchemeProvider>
    );
}

export default App;