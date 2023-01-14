import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, 
    AccumulationSeriesDirective, AccumulationLegend, PieSeries, AccumulationDataLabel, AccumulationTooltip, Inject } from '@syncfusion/ej2-react-charts';

import { themeColors } from '../../data/Data';
import { useStateContext } from '../../Context/ContextProvider';

const Pie = ({ males, females }) => {

  const { currentColor } = useStateContext();

  const pieChartData = [
      { x: 'Males', 
        y: males,
        text: `Males: ${males}`
      },
      { x: 'Females', 
        y: females,
        text: `Females: ${females}` 
      },   
  ];
  
  const pieCustomSeries = [
    { dataSource: {pieChartData},
      xName: 'x',
      yName: 'y',
      // type: 'pie',
      radius: '90%',
    }, 
  ];

  const datalabel = { visible: true, name: 'text', position: 'Outside' };

  const themeColors = [
    '#1A97F5',
    '#03C9D7',
    '#7352FF',
    '#FF5C8E',
    '#1E4DB7',
    '#FB9678',
  ];

  const palettes = [
    currentColor, 
    '#1E4DB7',
  ]


  return (
    <AccumulationChartComponent 
      id='sexCharts'
      width='520px'
      height='360px'
      
      // tooltip={{ enable: true }}  
    >
        <Inject services={[PieSeries, AccumulationDataLabel]}/>
        <AccumulationSeriesCollectionDirective>
        <AccumulationSeriesDirective dataSource={pieChartData} xName='x' yName='y' radius='70%' pointColorMapping='fill' dataLabel={datalabel} palettes={palettes}/>
          {/* {pieCustomSeries.map((item, index) => 
            <AccumulationSeriesDirective key={index} {...item} />
          )} */}
        </AccumulationSeriesCollectionDirective>
    </AccumulationChartComponent>
  )
}

export default Pie