import React from 'react';
import styles from './NextButton.module.css';
import { setStepperStep } from '../../../store/view';

type TNextButtonProps = {
  title: string
  stepNum: number
  isValid: boolean
}

export const NextButton: React.FC<TNextButtonProps> = ({ title, stepNum,isValid }) => {
  return (
    <div className={styles.nextBtnStyle}>
      <button className={isValid? styles.validBtn : styles.invalidBtn} disabled={!isValid} onClick={()=> setStepperStep(stepNum) }>
        {title}
      </button>
    </div>
  );
};

