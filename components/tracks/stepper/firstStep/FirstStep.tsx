import React, { useEffect } from 'react';
import { setStepperStep } from '../../../../store/view';
import { NextButton } from '../../../../assets/buttons/nextBtn/NextButton';
import styles from './FirstStep.module.css';

import { SubmitHandler, useForm } from 'react-hook-form';
import { ITrackData } from '../../../../models/stepper';
import { $resetData, $trackData, setTrackData } from '../../../../store/stepper';
import { useStore } from 'effector-react';
import { text } from 'stream/consumers';

export const FirstStep = () => {


  const {
    register,
    handleSubmit,
    reset,
    formState: { isValid, errors }
  } = useForm<Omit<ITrackData, 'submitted'>>({ mode: 'onChange' });

  const trackData = useStore($trackData);
  const resetData = useStore($resetData);

  const onSubmit: SubmitHandler<Omit<ITrackData, 'submitted'>> = ({ name, artist, text }) => {
    setTrackData({ artist, text, name });
    setStepperStep(1);
  };

  useEffect(() => {
    if (resetData) {
      reset();
    }
  }, [resetData]);

  return (
    <form className={styles.firstStepWrapper} onSubmit={handleSubmit(onSubmit)}>


      <input type='text' placeholder='Enter track name' defaultValue={trackData.name}
             {...register('name', { required: true })}
      />
      {errors.name && <span>This field is required</span>}

      <input type='text' placeholder='Enter author name' defaultValue={trackData.artist}
             {...register('artist', { required: true })}
      />
      {errors.artist && <span>This field is required</span>}


      <textarea placeholder='Enter Song Text' defaultValue={trackData.text}
                {...register('text', { required: true })}
      />
      {errors.text && <span>This field is required</span>}


      <NextButton title='Next' isValid={isValid} />


    </form>
  );
};

