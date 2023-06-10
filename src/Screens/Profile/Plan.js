import React, { useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { Text } from '@mantine/core';

const Plan = () => {
  const { setActive } = useOutletContext();
  useEffect(() => {
    const setActiveIndex = () => {
      setActive(3)
    }
    setActiveIndex();
  }, []);
  return (
    <main>
      <div className='mb-8'>
        <Text fw={500}>Your Plan and Billing</Text>
        <Text>View details and change settings for your subscription.</Text>
      </div>
    </main> 
  )
}

export default Plan