import { useState } from 'react';
import { Stepper, Button, Group } from '@mantine/core';

const CreateStepper = ({ nextStep, prevStep, active, setActive }) => {


  return (
    <>
      <Stepper active={active} breakpoint="sm">
        <Stepper.Step label="Address input" description="Enter an address">
          {/* Step 1 content: Create an account */}
        </Stepper.Step>
        <Stepper.Step label="Verify address" description="Confirm the property's location">
          {/* Step 2 content: Verify email */}
        </Stepper.Step>
        <Stepper.Step label="Optional: image upload" description="Get full access">
          {/* Step 3 content: Get full access */}
        </Stepper.Step>
        <Stepper.Completed>
          Completed, click back button to get to previous step
        </Stepper.Completed>
      </Stepper>


    </>
  );
}

export default CreateStepper