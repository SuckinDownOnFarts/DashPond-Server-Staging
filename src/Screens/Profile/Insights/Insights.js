import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { SimpleGrid, Skeleton, Container, Stack, useMantineTheme, px } from '@mantine/core';
import { useInsightStyles } from './Styles/ProfileStyles';

// const getChild = (height) => <Skeleton height={height} radius="md" animate={false} />;
// const BASE_HEIGHT = '100%';
// const getSubHeight = (children, spacing) =>
//   BASE_HEIGHT / children - spacing * ((children - 1) / children);

const Insights = () => {
  // const theme = useMantineTheme();
  const { classes } = useInsightStyles();
  const { setActive } = useOutletContext();
  setActive(1);
  
  

  return (
    <></>
  );
}

export default Insights