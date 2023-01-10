import React from 'react';
import { setStepperStep } from '../../../../store/view';

export const ThirdStep = () => {
  return (
    <div >
    <input type='file'/>
      <button
        // @ts-ignore
        onClick={()=> setStepperStep(0)}>Upload</button>
    </div>
  );
};

