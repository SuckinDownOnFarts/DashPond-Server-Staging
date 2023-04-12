import React from 'react';
import { Card, Grid, Title, Text } from '@tremor/react';

const Plan = () => {
  return (
    <main>
      <div className='mb-8'>
        <Title>Your Plan and Billing</Title>
        <Text>View details and change settings for your subscription.</Text>
      </div>

      <Grid numColsSm={ 1 } numColsMd={ 1 } numColsLg={ 1 } className=" gap-x-6 gap-y-6">
        <Card className='m-auto' decoration="top" decorationColor="indigo">
          <div>
            Subscription
          </div>
        </Card>
      </Grid>
    </main>
    // <div></div>
  )
}

export default Plan