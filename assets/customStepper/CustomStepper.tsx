import { useStore } from 'effector-react';
import { $stepNumber } from '../../store/view';
import { Step, Stepper } from 'react-form-stepper';
import React from 'react';

const CustomStepper = () => {

  const step: string[] = ['Track info', 'Upload the cover', 'Upload Track'];
  const stepNumber = useStore($stepNumber);

  return (
    <>
      <Stepper activeStep={stepNumber}>
        {step.map((item) => <Step key={item} label={item} />)}
      </Stepper>
    </>
  );
};

export default CustomStepper;