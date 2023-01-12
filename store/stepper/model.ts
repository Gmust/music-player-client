import { createDomain } from 'effector';


const stepper = createDomain();

export const setTextArea = stepper.createEvent<string>();
export const setNewTrack = stepper.createEvent();
export const setNewCover = stepper.createEvent();

export const $textArea = stepper.createStore('')
  .on(setTextArea, (state, value) => value);


export const $cover = stepper.createStore( null)
  .on(setNewCover, (_, value) => value);

export const $newTrack = stepper.createStore(null)
  .on(setNewTrack, (_, value) => value);

