import { useStore } from 'effector-react';
import { $stepNumber, setStepperStep } from '../../store/view';
import { Step, Stepper } from 'react-form-stepper';
import React from 'react';
import { TSteps } from '../../models';

const CustomStepper = () => {


  const steps: TSteps[] = [
    {label:'Track info', stepNum: 0},
    {label: 'Upload the cover', stepNum: 1},
    {label: 'Upload Track', stepNum: 2},
  ]

  const stepNumber = useStore($stepNumber);

  return (
    <>
      <Stepper activeStep={stepNumber}>
        {steps.map(({stepNum,label}) =>
          <Step key={stepNum} onClick={()=> setStepperStep(stepNum)} label={label} />)}
      </Stepper>
    </>
  );
};

export default CustomStepper;