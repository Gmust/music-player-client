import React from 'react';
import styles from './ThirdStepper.module.css';
import { FcUpload } from 'react-icons/fc';
import { setNewTrack } from '../../../../store/stepper';

export const ThirdStep = () => {
  return (
    <div className={styles.thirdStepWrapper}>

      <div className={styles.uploadBtnWrapper}>
        <button className={styles.uploadBtnStyle}>
          Upload a track
          <FcUpload size={25} />
        </button>
        <input type='file' accept='audio/*' onChange={(e) =>
          //@ts-ignore
          setNewTrack(e.target.files)} />
      </div>

    </div>
  );
};

