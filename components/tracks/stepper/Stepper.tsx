import React from 'react';
import { useStore } from 'effector-react';
import { $stepNumber, setShowModal, setStepperStep } from '../../../store/view';
import { FirstStep } from './firstStep/FirstStep';
import { SecondStep } from './secondStep/SecondStep';
import { ThirdStep } from './thirdStep/ThirdStep';
import dynamic from 'next/dynamic';
import styles from './Stepper.module.css';
import { AiFillCloseSquare } from 'react-icons/ai';
import { BiReset } from 'react-icons/bi';
import { resetStepperData } from '../../../store/stepper';

const StepperComponent = dynamic(() => import('../../../assets/customStepper/CustomStepper'), {
  ssr: false
});

const StepperComponents = () => {

  const step = useStore($stepNumber);

  switch (step) {
    case 0:
      return <FirstStep />;
    case  1:
      return <SecondStep />;
    case 2:
      return <ThirdStep />;
    default:
      return <FirstStep />;
  }

};

export const StepperWrapper = () => {


  const step: string[] = ['Track info', 'Upload the cover', 'Upload Track'];
  const stepNumber = useStore($stepNumber);

  return (
    <div className={styles.stepperWrapper}>

      <div className={styles.closeIcon}>
        <BiReset  size={30} color='green' onClick={()=> {
          resetStepperData(true);
          setTimeout(()=> {
            resetStepperData(false)
          }, 1000)
        }} />
        <AiFillCloseSquare  size={30} color='red' onClick={() => {
          setShowModal(false);
          setStepperStep(0);
        }} />
      </div>

      <StepperComponents />

      <div className={styles.progressBarContainer}>
        <StepperComponent />
      </div>

    </div>
  );


};
