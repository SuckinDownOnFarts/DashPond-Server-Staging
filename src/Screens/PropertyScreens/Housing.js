import React, { useEffect, useState } from 'react';
import { useParams, generatePath } from 'react-router-dom';

import PivotTable from '../../components/PopulationCharts/PivotTable';

import api from '../../api/axios';

const Housing = () => {

  const { id } = useParams();

  const housingPath = generatePath('/housing/:id', {
    id: id
  })

  const [ data, setData ] = useState([]);
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    const fetchHousingData = async () => {
      try {
        const dataResponse = await api.get(housingPath);
        setData(dataResponse.data);
        setLoading(false);
      } catch (err) {
        if (err.response) {
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers); 
        } else { 
          console.log(`Error: ${err.message}`)
        }
      }
    }

    fetchHousingData();
  }, [])

  // console.log(data);

  let householdData = []
  !loading ? householdData = [
    { '# of Persons': data[0][0].DP02_0002E, 'Header': 'Total Households', 'Sub': 'Married Couple Households', 'Radius': '3 Mile' },
    { '# of Persons': data[1][0].DP02_0002E, 'Header': 'Total Households', 'Sub': 'Married Couple Households', 'Radius': '5 Mile' },
    { '# of Persons': data[2][0].DP02_0002E, 'Header': 'Total Households', 'Sub': 'Married Couple Households', 'Radius': '10 Mile' },
    { '# of Persons': data[0][0].DP02_0004E, 'Header': 'Total Households', 'Sub': 'Non-Married Couple Households', 'Radius': '3 Mile' },
    { '# of Persons': data[1][0].DP02_0004E, 'Header': 'Total Households', 'Sub': 'Non-Married Couple Households', 'Radius': '5 Mile' },
    { '# of Persons': data[2][0].DP02_0004E, 'Header': 'Total Households', 'Sub': 'Non-Married Couple Households', 'Radius': '10 Mile' },
    { '# of Persons': data[0][0].DP02_0006E, 'Header': 'Total Households', 'Sub': 'Male Householder', 'Radius': '3 Mile' },
    { '# of Persons': data[1][0].DP02_0006E, 'Header': 'Total Households', 'Sub': 'Male Householder', 'Radius': '5 Mile' },
    { '# of Persons': data[2][0].DP02_0006E, 'Header': 'Total Households', 'Sub': 'Male Householder', 'Radius': '10 Mile' },
    { '# of Persons': data[0][0].DP02_0010E, 'Header': 'Total Households', 'Sub': 'Female Householder', 'Radius': '3 Mile' },
    { '# of Persons': data[1][0].DP02_0010E, 'Header': 'Total Households', 'Sub': 'Female Householder', 'Radius': '5 Mile' },
    { '# of Persons': data[2][0].DP02_0010E, 'Header': 'Total Households', 'Sub': 'Female Householder', 'Radius': '10 Mile' },
    { '# of Persons': data[0][0].DP02_0014E, 'Header': 'Total Households', 'Sub': 'Households with at least one preson under 18', 'Radius': '3 Mile' },
    { '# of Persons': data[1][0].DP02_0014E, 'Header': 'Total Households', 'Sub': 'Households with at least one preson under 18', 'Radius': '5 Mile' },
    { '# of Persons': data[2][0].DP02_0014E, 'Header': 'Total Households', 'Sub': 'Households with at least one preson under 18', 'Radius': '10 Mile' },
    { '# of Persons': data[0][0].DP02_0015E, 'Header': 'Total Households', 'Sub': 'Households with at least one preson over 65', 'Radius': '3 Mile' },
    { '# of Persons': data[1][0].DP02_0015E, 'Header': 'Total Households', 'Sub': 'Households with at least one preson over 65', 'Radius': '5 Mile' },
    { '# of Persons': data[2][0].DP02_0015E, 'Header': 'Total Households', 'Sub': 'Households with at least one preson over 65', 'Radius': '10 Mile' },
    { '# of Persons': data[0][0].DP02_0019E, 'Header': 'Population in Households', 'Sub': 'House Holder', 'Radius': '3 Mile' },
    { '# of Persons': data[1][0].DP02_0019E, 'Header': 'Population in Households', 'Sub': 'House Holder', 'Radius': '5 Mile' },
    { '# of Persons': data[2][0].DP02_0019E, 'Header': 'Population in Households', 'Sub': 'House Holder', 'Radius': '10 Mile' },
    { '# of Persons': data[0][0].DP02_0020E, 'Header': 'Population in Households', 'Sub': 'Spouse', 'Radius': '3 Mile' },
    { '# of Persons': data[1][0].DP02_0020E, 'Header': 'Population in Households', 'Sub': 'Spouse', 'Radius': '5 Mile' },
    { '# of Persons': data[2][0].DP02_0020E, 'Header': 'Population in Households', 'Sub': 'Spouse', 'Radius': '10 Mile' },
    { '# of Persons': data[0][0].DP02_0021E, 'Header': 'Population in Households', 'Sub': 'Unmarried Partner', 'Radius': '3 Mile' },
    { '# of Persons': data[1][0].DP02_0021E, 'Header': 'Population in Households', 'Sub': 'Unmarried Partner', 'Radius': '5 Mile' },
    { '# of Persons': data[2][0].DP02_0021E, 'Header': 'Population in Households', 'Sub': 'Unmarried Partner', 'Radius': '10 Mile' },
    { '# of Persons': data[0][0].DP02_0022E, 'Header': 'Population in Households', 'Sub': 'Child', 'Radius': '3 Mile' },
    { '# of Persons': data[1][0].DP02_0022E, 'Header': 'Population in Households', 'Sub': 'Child', 'Radius': '5 Mile' },
    { '# of Persons': data[2][0].DP02_0022E, 'Header': 'Population in Households', 'Sub': 'Child', 'Radius': '10 Mile' },
    { '# of Persons': data[0][0].DP02_0023E, 'Header': 'Population in Households', 'Sub': 'Other Realtives', 'Radius': '3 Mile' },
    { '# of Persons': data[1][0].DP02_0023E, 'Header': 'Population in Households', 'Sub': 'Other Realtives', 'Radius': '5 Mile' },
    { '# of Persons': data[2][0].DP02_0023E, 'Header': 'Population in Households', 'Sub': 'Other Realtives', 'Radius': '10 Mile' },
    { '# of Persons': data[0][0].DP02_0024E, 'Header': 'Population in Households', 'Sub': 'Non-relatives', 'Radius': '3 Mile' },
    { '# of Persons': data[1][0].DP02_0024E, 'Header': 'Population in Households', 'Sub': 'Non-relatives', 'Radius': '5 Mile' },
    { '# of Persons': data[2][0].DP02_0024E, 'Header': 'Population in Households', 'Sub': 'Non-relatives', 'Radius': '10 Mile' },
  ] : householdData = []

  const dataSourceSettingsHH = {
    columns: [{ name: 'Radius', caption: 'Buffer' }],
    dataSource: householdData,
    expandAll: false,
    filters: [],
    showGrandTotals: false,
    drilledMembers: [{ name: 'Header', items: ['Total Households'] }, 
    { name: 'Header', items: ['Population in Households'] }],
    // formatSettings: [{ name: 'Amount', format: 'C0' }],
    rows: [{ name: 'Header' }, { name: 'Sub' }],
    values: [{ name: '# of Persons' }]
};

let housingUnitData = []
  !loading ? housingUnitData = [
    { '# of Units': data[0][0].DP04_0002E, 'Header': 'Housing Units', 'Sub': 'Occupied Housing Units', 'Radius': '3 Mile' },
    { '# of Units': data[0][0].DP04_0003E, 'Header': 'Housing Units', 'Sub': 'Vacant Housing Units', 'Radius': '3 Mile' },
  ] : housingUnitData = []

  const dataSourceSettingsHU = {
    columns: [{ name: 'Radius', caption: 'Buffer' }],
    dataSource: housingUnitData,
    expandAll: false,
    filters: [],
    showGrandTotals: false,
    drilledMembers: [{ name: 'Header', items: ['Housing Units'] }],
    // formatSettings: [{ name: 'Amount', format: 'C0' }],
    rows: [{ name: 'Header' }, { name: 'Sub' }],
    values: [{ name: '# of Units' }]
};

  return (
  <div className='mt-12 items-center'>
    <div className='flex flex-wrap justify-center pt-3 pb-10'>
      <p className='font-bold text-5xl' >
        <span>Key Household Insights</span>
      </p>
    </div>
    <div className='px-4 pt-10 flex flex-wrap justify-center'>
      <PivotTable 
        pivotData={householdData}
        setting={dataSourceSettingsHH}
        id='HouseholdTable'
      />
    </div>
    <div className='px-4 flex flex-wrap justify-center'>
      <PivotTable 
        pivotData={housingUnitData}
        setting={dataSourceSettingsHU}
        id='HousingUnitTable'
      /> 
    </div>
    {!loading ?
    <div>
      {data[0][0].DP04_0002E} 
    </div> : <></>}
  </div>
  )
}

export default Housing