import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Image, Text, Group, Badge, createStyles, Center, Button, rem } from '@mantine/core';
import { IconGasStation, IconGauge, IconManualGearbox, IconUsers } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
  card: {
    backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
  },

  imageSection: {
    padding: theme.spacing.md,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  label: {
    marginBottom: theme.spacing.xs,
    lineHeight: 1,
    fontWeight: 700,
    fontSize: theme.fontSizes.xs,
    letterSpacing: rem(-0.25),
    textTransform: 'uppercase',
  },

  section: {
    padding: theme.spacing.md,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
    }`,
  },

  icon: {
    marginRight: rem(5),
    color: theme.colorScheme === 'dark' ? theme.colors.dark[2] : theme.colors.gray[5],
  },
}));

const mockdata = [
  { label: 'Total Population: ', icon: IconUsers },
  { label: 'Median Age:', icon: IconGauge },
  { label: 'Household Size:', icon: IconManualGearbox },
  { label: 'Median Household Income:', icon: IconGasStation },
];

const Feed = ({posts}) => {
  const { classes } = useStyles();
  const navigate = useNavigate();

  const features = mockdata.map((feature) => (
    <Center key={feature.label}>
      <feature.icon size="1.05rem" className={classes.icon} stroke={1.5} />
      <Text size="xs">{feature.label}</Text>
    </Center>
  ));

  return (
    <div className='items-center p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-5 auto-rows-fr'>
      {posts.map(post => (
        <Card withBorder radius="md" className={classes.card}>
          {/* <Link to={`/dataprofile/${post.id}/overview`}> */}
            <Card.Section className={classes.imageSection}>
              <Image src={`https://res.cloudinary.com/djlalgsmk/image/upload/v${post.cloudinary_version}/${post.cloudinary_public_id}`} alt="Tesla Model S" />
            </Card.Section>

            <Group position="apart" mt="md">
              <div>
                <Text fw={500}>{post.address.substring(0, post.address.indexOf(","))}</Text>
                <Text fz="xs" c="dimmed">
                  {`${post.address.split(",")[1]}, ${post.address.split(",")[2]}, ${post.address.split(",")[3]}`} {/*//FIX THIS LATER PLEASE */}
                </Text>
              </div>
              <Badge variant="outline">25% off</Badge>
            </Group>

            <Card.Section className={classes.section} mt="md">
              <Text fz="sm" c="dimmed" className={classes.label}>
                5 Mile Key Demographics
              </Text>

              <Group spacing={8} mb={-8}>
                {features}
              </Group>
            </Card.Section>

            <Card.Section className={classes.section}>
              <Group spacing={30}>
                <Button onClick={() => navigate(`/dataprofile/${post.id}/overview`)} radius="xl" style={{ flex: 1 }}>
                  View Details
                </Button>
              </Group>
            </Card.Section>
          {/* </Link> */}
        </Card>
      ))}
    </div>
  );
}
//     <div className='items-center p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-5 auto-rows-fr'>

//       {posts.map(post => (
//         <div className='rounded shadow-lg border-2 bg-white ' key={post.id}>
//           <Link to={`/dataprofile/${post.id}/overview`}>

//             <div className='m-auto relative'>

//               <img 
//                 style={{ width: 350, height: 250 }} src={`https://res.cloudinary.com/djlalgsmk/image/upload/v${post.cloudinary_version}/${post.cloudinary_public_id}`} 
//                 className='w-full '
//               />

//               <div className='px-6 py-4'>
//                 <div className='font-bold text-xl mb-2'>
//                   {post.address}
//                 </div>
//               </div>

//               <div className="px-6 pt-4 pb-2">
//                 <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//                   #photography
//                 </span>
//                 <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//                   #travel
//                 </span>
//                 <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
//                   #summer
//                 </span>
//               </div>

//             </div>

//           </Link>
//         </div>
//       ))}

//     </div>
//   )
// }

export default Feed