import React from 'react';
import styles from './ThirdStepper.module.css';
import { setStepperStep } from '../../../../store/view';
import { FcUpload } from 'react-icons/fc';

export const ThirdStep = () => {
  return (
    <div className={styles.thirdStepWrapper}>

      <div className={styles.uploadBtnWrapper}>
        <button className={styles.uploadBtnStyle}>
          Upload a track
          <FcUpload size={25}/>
        </button>
        <input type='file' accept='audio/mp3, audio/m4a, audio/wav' />
      </div>

    </div>
  );
};

