import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';

import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/Data';

const Stacked = ({ width, height }) => {
  return (
    <ChartComponent
        width={width}
        height={height}
        id="charts"
        primaryXAxis={stackedPrimaryXAxis}
        primaryYAxis={stackedPrimaryYAxis}
        chartArea={{ border: { width: 0 }}}
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