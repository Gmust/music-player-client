import React from 'react';
import { setStepperStep } from '../../../../store/view';
import styles from './FirstStep.module.css';
import { NextButton } from '../../../../assets/buttons/nextBtn/NextButton';

import { SubmitHandler, useForm } from 'react-hook-form';
import { ITrackData } from '../../../../models/stepper';
import { setTrackData } from '../../../../store/stepper';

export const FirstStep = () => {


  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, errors }
  } = useForm<Omit<ITrackData, 'submitted'>>({ mode: 'onChange' });


  const onSubmit: SubmitHandler<Omit<ITrackData, 'submitted'>> = ({ name, artist, text }) => {
    setTrackData({ artist, text, name });
    setStepperStep(1);
    reset();
  };


  return (
    <form className={styles.firstStepWrapper} onSubmit={handleSubmit(onSubmit)}>

      <input type='text' placeholder='Enter track name'
             {...register('name', { required: true })}
      />
      {errors.name && <span>This field is required</span>}

      <input type='text' placeholder='Enter author name'
             {...register('artist', { required: true })}
      />
      {errors.artist && <span>This field is required</span>}


      <textarea placeholder='Enter Song Text'
                {...register('text', { required: true })}
      />
      {errors.text && <span>This field is required</span>}


      <NextButton title='Next' isValid={isValid} />
    </form>
  );
};

