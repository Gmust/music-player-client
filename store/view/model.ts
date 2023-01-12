import { createDomain } from 'effector';
import { submitted } from '../forms';


const model = createDomain();

export const setShowModal = model.createEvent<boolean>();
export const setStepperStep = model.createEvent<number>();

export const $modal = model.createStore(false)
  .on(setShowModal, (_, val) => val);


export const $stepNumber = model.createStore(0)
  .on(setStepperStep, (_, step) => step)
