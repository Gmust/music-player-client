import React from 'react';
import { setStepperStep } from '../../../../store/view/model';
import styles from './FirstStep.module.css';
import { NextButton } from '../../../../assets/buttons/nextBtn/NextButton';
import { Field } from '../../../../assets/fields/Field';
import { submitted } from '../../../../store/forms';
import { setTextArea } from '../../../../store/stepper';

export const FirstStep = () => {

  const isValid = true;

  const handleSubmit = (e: any) => {
    setStepperStep(1);
    submitted();
    e.preventDefault();
  };

  return (
    <form className={styles.firstStepWrapper} onSubmit={handleSubmit}>

      <Field name='trackName' type='text' label='Track name' placeholder='Enter track name' />

      <Field name='authorName' type='text' label='Author name' placeholder='Enter author name' />

      <textarea name='trackText' placeholder='Enter Song Text' onChange={(e)=> setTextArea(e.target.value)} />

      <NextButton title='Next'  isValid={isValid} />

    </form>
  );
};

