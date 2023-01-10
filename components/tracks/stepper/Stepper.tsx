import React from 'react';
import { useStore } from 'effector-react';
import { $stepNumber } from '../../../store/view';
import { FirstStep } from './firstStep/FirstStep';
import { SecondStep } from './secondStep/SecondStep';
import { ThirdStep } from './thirdStep/ThirdStep';
import styles from './Stepper.module.css';
import { Step, Stepper } from 'react-form-stepper';

const StepperComponents = ({ steps }: any) => {

  const step = useStore($stepNumber);

  switch (step) {
    case 0:
      return <FirstStep />;
    case  1:
      return <SecondStep />;
    case 2:
      return <ThirdStep />;
  }

};

export const StepperWrapper = () => {


  const step: string[] = ['Track info', 'Upload the cover', 'Upload Track'];
  const stepNumber = useStore($stepNumber);

  return (
    <div>
      {// @ts-ignore
        <StepperComponents steps={step} />
      }
      <div className={styles.progressBarContainer}>
        <Stepper activeStep={stepNumber}>
          {step.map((item) => <Step key={item} label={item} />)}
        </Stepper>
      </div>

      <button onClick={() => console.log(step)}></button>
    </div>
  );


};
