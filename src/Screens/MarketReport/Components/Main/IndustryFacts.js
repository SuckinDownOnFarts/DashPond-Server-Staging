import React, {useState} from 'react';
import { Progress, Box, Text, Group, Paper, SimpleGrid, rem } from '@mantine/core';
import { IconArrowUpRight, IconDeviceAnalytics } from '@tabler/icons-react';
import { bufferData } from '../../../../data/Data';
import { useIndustryStyles } from './Styles/DPStyles';


const EmploymentFacts = ({ data }) => {
    const { classes } = useIndustryStyles();
    const [buffer, setBuffer] = useState(0);

    
    const total =  data[0][0][12];
    const diff =  18;
    const cardData = [
          {
            "label": "White Collar",
            "count": data[0][0][9],
            "part": parseInt(((data[0][0][9] / data[0][0][12]) * 100).toFixed(0)),
            "tooltip": 'Number of White Collar Workers',
            "color": "#47d6ab"
          },
          {
            "label": "Blue Collar",
            "count": data[0][0][10],
            "part": parseInt(((data[0][0][10] / data[0][0][12]) * 100).toFixed(0)),
            "tooltip": 'Number of Blue Collar Workers',
            "color": "#03141a"
          },
          {
            "label": "Services",
            "count": data[0][0][11],
            "part": parseInt(((data[0][0][11] / data[0][0][12]) * 100).toFixed(0)),
            "tooltip": 'Number of Service Workers',
            "color": "#4fcdf7"
          }
    ]; 

    const segments = cardData.map((segment) => ({
        value: segment.part,
        color: segment.color,
        label: `${segment.part}%`,
        tooltip: segment.tooltip
    }));

    const descriptions = cardData.map((stat) => (
        <Box key={stat.label} sx={{ borderBottomColor: stat.color }} className={classes.stat}>
          <Text tt="uppercase" fz="xs" c="dimmed" fw={700}>
            {stat.label}
          </Text>
    
          <Group position="apart" align="flex-end" spacing={0}>
            <Text fw={700}>{stat.count}</Text>
            <Text c={stat.color} fw={700} size="sm" className={classes.statCount}>
              {stat.part}%
            </Text>
          </Group>
        </Box>
      ));

    return (
        <Paper withBorder p="md" radius="md" className={classes.paper}>
        <Group position="apart">
          <Group align="flex-end" spacing="xs">
            <Text fz="xl" fw={700}>
              {total}
            </Text>
            <Text c="teal" className={classes.diff} fz="sm" fw={700}>
              <span>{diff}%</span>
              <IconArrowUpRight size="1rem" style={{ marginBottom: rem(4) }} stroke={1.5} />
            </Text>
          </Group>
          <IconDeviceAnalytics size="1.4rem" className={classes.icon} stroke={1.5} />
        </Group>
  
        <Text c="dimmed" fz="sm">
          Page views compared to previous month
        </Text>
  
        <Progress
          sections={segments}
          size={34}
          classNames={{ label: classes.progressLabel }}
          mt={40}
        />
        <SimpleGrid cols={3} breakpoints={[{ maxWidth: 'xs', cols: 1 }]} mt="xl">
          {descriptions}
        </SimpleGrid>
      </Paper>
    )
}

export default EmploymentFacts

    // const industryData = [
    //     {
    //         name: "Agriculture",
    //         "Percentage": ((data[buffer][0].DP03_0033E/data[buffer][0].DP03_0032E) * 100)
    //     },
    //     {
    //         name: "Construction",
    //         "Percentage": ((data[buffer][0].DP03_0034E/data[buffer][0].DP03_0032E) * 100)
    //     },
    //     {
    //         name: "Manufacturing",
    //         "Percentage": ((data[buffer][0].DP03_0035E/data[buffer][0].DP03_0032E) * 100)
    //     },
    //     {
    //         name: "Wholesale",
    //         "Percentage": ((data[buffer][0].DP03_0036E/data[buffer][0].DP03_0032E) * 100)
    //     },
    //     {
    //         name: "Retail",
    //         "Percentage": ((data[buffer][0].DP03_0037E/data[buffer][0].DP03_0032E) * 100)
    //     },
    //     {
    //         name: "Transportation",
    //         "Percentage": ((data[buffer][0].DP03_0038E/data[buffer][0].DP03_0032E) * 100)
    //     },
    //     {
    //         name: "Information",
    //         "Percentage": ((data[buffer][0].DP03_0039E/data[buffer][0].DP03_0032E) * 100)
    //     },
    //     {
    //         name: "Finance",
    //         "Percentage": ((data[buffer][0].DP03_0040E/data[buffer][0].DP03_0032E) * 100)
    //     },
    //     {
    //         name: "Scientific",
    //         "Percentage": ((data[buffer][0].DP03_0041E/data[buffer][0].DP03_0032E) * 100)
    //     },
    //     {
    //         name: "Education",
    //         "Percentage": ((data[buffer][0].DP03_0042E/data[buffer][0].DP03_0032E) * 100)
    //     },
    //     {
    //         name: "Entertainment",
    //         "Percentage": ((data[buffer][0].DP03_0043E/data[buffer][0].DP03_0032E) * 100)
    //     },
    //     {
    //         name: "Other Services",
    //         "Percentage": ((data[buffer][0].DP03_0044E/data[buffer][0].DP03_0032E) * 100)
    //     },
    //     {
    //         name: "Public administration",
    //         "Percentage": ((data[buffer][0].DP03_0045E/data[buffer][0].DP03_0032E) * 100)
    //     },
    // ]


        // <>
        //     <Grid numColsSm={ 1 } numColsMd={ 1 } numColsLg={ 1 } className="mt-8 gap-x-6 gap-y-6">
        //         <Card>
        //             <Flex>
        //                 <Title>Percentage of Labor Force by Industry</Title>
        //                 {/* <Subtitle>Some words go here</Subtitle> */}
        //                 <Dropdown
        //                     defaultValue={0}
        //                     onValueChange={(value) => setBuffer(value)}
        //                     placeholder="3 Mile"
        //                     className="mt-0 max-w-0"
        //                     >
        //                     {bufferData.map((item) => (
        //                         <DropdownItem
        //                         key={item.bufferName}
        //                         value={item.value}
        //                         text={item.bufferName}
        //                         />
        //                     ))}
        //                 </Dropdown>
        //             </Flex>
        //             <BarChart
        //                 data={industryData}
        //                 index="name"
        //                 categories={["Percentage"]}
        //                 colors={["purple"]}
        //                 stack="horizontal"
        //                 className='w-full'
        //             />
        //         </Card>
        //     </Grid>
        // </>