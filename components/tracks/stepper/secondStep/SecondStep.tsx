import React, { useState } from 'react';
import { NextButton } from '../../../../assets/buttons/nextBtn/NextButton';
import { FcUpload } from 'react-icons/fc';
import styles from './SecondStepper.module.css';
import { $cover, setNewCover } from '../../../../store/stepper';
import { setStepperStep } from '../../../../store/view';
import { useStore } from 'effector-react';


export const SecondStep = () => {

  const [valid, setIsValid] = useState<boolean>(false);
  const cover = useStore($cover);


  return (
    <div className={styles.secondStepWrapper}>
      {cover
        ?
        <div style={{ color: 'black', marginBottom: '10px' }}>
          {cover.name}.{cover.type}
        </div>
        :
        <h1>Select file from your device</h1>
      }

      <div className={styles.uploadBtnWrapper}>
        <button className={styles.uploadBtnStyle}>
          Upload a cover
          <FcUpload size={25} />
        </button>
        <input type='file' name='coverFile' onChange={(e) => {
          setNewCover(e.target.files![0]!);
          setIsValid(true);
        }}
               accept='image/*' />
      </div>

      <span onClick={() => setStepperStep(2)}>
      <NextButton title='Next' isValid={valid} />
      </span>
    </div>
  );
};

