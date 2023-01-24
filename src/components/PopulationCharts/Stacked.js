import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';

// import { useStateContext } from '../../Context/ContextProvider';

const Stacked = ({ width, height, id, dataSource, yTitle, xTitle, chartTitle, yMin, yMax, yInterval, chartType }) => {

  const stackedChartData = dataSource

  const stackedCustomSeries = [
    { dataSource: stackedChartData,
      xName: 'x',
      yName: 'y',
      type: chartType,
      background: 'blue',
      fill: 'blue'
    }, 
  ];

  const stackedPrimaryXAxis = {
    title: xTitle,
    majorGridLines: { width: 0 },
    minorGridLines: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
    interval: 1,
    lineStyle: { width: 0 },
    labelIntersectAction: 'Rotate45',
    valueType: 'Category',
  };
  
  const stackedPrimaryYAxis = {
    title: yTitle,
    lineStyle: { width: 0 },
    minimum: yMin,
    maximum: yMax,
    interval: yInterval,
    majorTickLines: { width: 0 },
    majorGridLines: { width: 1 },
    minorGridLines: { width: 1 },
    minorTickLines: { width: 0 },
    labelFormat: '{value}',
  };

  return (
    <ChartComponent
        title={chartTitle}
        width={width}
        height={height}
        id={id}
        primaryXAxis={stackedPrimaryXAxis}
        primaryYAxis={stackedPrimaryYAxis}
        chartArea={{ border: { width: 1 }}}
        tooltip={{ enable: true }}
        legendSettings={{ background: 'white' }}
    >
        <Inject services={[StackingColumnSeries, Legend, Category, Tooltip]} />
        <SeriesCollectionDirective>
            {stackedCustomSeries.map((item, index) => 
                <SeriesDirective key={index} {...item} />)}
        </SeriesCollectionDirective>
    </ChartComponent>
  )
}

export default Stacked