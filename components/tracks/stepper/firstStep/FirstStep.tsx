import React from 'react';
import { setStepperStep } from '../../../../store/view';
import styles from './FirstStep.module.css';
import { NextButton } from '../../../../assets/buttons/nextBtn/NextButton';

export const FirstStep = () => {

  const isValid = true

  return (
    <div className={styles.firstStepWrapper}>

      <input placeholder='Enter track name' />

      <input placeholder='Enter authors name' />

      <textarea placeholder='Enter Song Text' />

      <NextButton title='Next' stepNum={1} isValid={isValid} />

    </div>
  );
};

