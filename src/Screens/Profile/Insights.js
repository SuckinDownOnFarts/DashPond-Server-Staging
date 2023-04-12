import React from 'react';
import { Card, Grid, Title, Text } from '@tremor/react';

const Insights = () => {
  return (
    <main>
      <div className='mb-8'>
        <Title>Account Insights</Title>
        <Text>Track your account's metrics</Text>
      </div>

      <Grid numColsSm={ 1 } numColsMd={ 1 } numColsLg={ 1 } className=" gap-x-6 gap-y-6">
        <Card className='m-auto' decoration="top" decorationColor="indigo">
          <div>
            Coming Soon
          </div>
        </Card>
      </Grid>
    </main>
  )
}

export default Insights