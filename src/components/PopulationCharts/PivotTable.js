import React from 'react';
import { FieldList, Inject, PivotViewComponent } from '@syncfusion/ej2-react-pivotview';



const PivotTable = ({ id, setting }) => {

  let pivotObj;

  const primaryXAxis = {
    labelIntersectionAction: true
  }

  const margin = {
    left: 5
  }

  return (
    <PivotViewComponent 
      ref={d => pivotObj = d} 
      id={id} 
      height={550} 
      width={1350}
      dataSourceSettings={setting}
      background='red'
      // margin={margin}
      // primaryXAxis={primaryXAxis}
      showFieldList={true}
      showGroupingBar={true}>
        <Inject services={[FieldList]} />
    </PivotViewComponent>

  )
}

export default PivotTable