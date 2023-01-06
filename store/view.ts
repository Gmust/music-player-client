import { createDomain } from 'effector';


const view = createDomain();

export const setShowModal = view.createEvent<boolean>();

export const $modal = view.createStore(false)
  .on(setShowModal, (_, val) => val);