import { createDomain } from 'effector';


const view = createDomain();

export const setShowModal = view.createEvent<boolean>();
export const setStepperStep = view.createEvent<number>();

export const $modal = view.createStore(false)
  .on(setShowModal, (_, val) => val);


export const $stepNumber = view.createStore(0)
  .on(setStepperStep, (_, step) => step);