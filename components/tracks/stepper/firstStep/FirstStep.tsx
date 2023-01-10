import React from 'react';
import { setStepperStep } from '../../../../store/view';

export const FirstStep = () => {


  return (
    <div >
      <input />
      <br />
      <input />
      <button
        // @ts-ignore
        onClick={() => setStepperStep(1)}>Next</button>
    </div>
  );
};

