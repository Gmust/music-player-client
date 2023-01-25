import { createDomain } from 'effector';
import { ITrack } from '../../models/tracks';
import { ITrackData } from '../../models/stepper';
import { TracksApi } from '../../api/tracksApi';


const stepper = createDomain();


export const setTrackData = stepper.createEvent<Omit<ITrackData, 'submitted'>>();
export const setNewCover = stepper.createEvent<File>();
export const setNewTrack = stepper.createEvent<File>();

export const setStepperError = stepper.createEvent<string>();


export const createTrackFx = stepper.createEffect(
  (formData: any) => {
    TracksApi.createTrack(formData);
  }
);


export const $stepperError = stepper.createStore('')
  .on(setStepperError, (_, val) => val);

export const $trackData = stepper.createStore<Omit<ITrackData, 'submitted'>>({
  name: '',
  artist: '',
  text: ''
}).on(setTrackData, (_, value) => value);


export const $cover = stepper.createStore<File>(null as unknown as File)
  .on(setNewCover, (_, value) => value);

export const $newTrack = stepper.createStore<File>(null as unknown as File)
  .on(setNewTrack, (_, value) => value);


$trackData.reset(createTrackFx.doneData);
$cover.reset(createTrackFx.doneData);
$newTrack.reset(createTrackFx.doneData);