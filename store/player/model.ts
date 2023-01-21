import { createDomain } from 'effector';
import { ICurrentTrack } from '../../models/tracks';
import { ITime } from '../../models/player';


const player = createDomain();

export const setVolume = player.createEvent<number>();
export const setCurrentTrack = player.createEvent<ICurrentTrack>();
export const setIsPlaying = player.createEvent<boolean>();


export const $volume = player.createStore(0.3)
  .on(setVolume, (_, volume) => volume);

export const $currentTrack = player.createStore<ICurrentTrack>({
  audio: '',
  artist: '',
  picture: '',
  _id: '',
  name: ''
})
  .on(setCurrentTrack, (_, track) => track)


export const $isPlaying = player.createStore<boolean>(false)
  .on(setIsPlaying, (_, isPlaying) => {
    return isPlaying;
  });


/*

export const $isPlaying = player.createStore(false)
  .on(setIsPlaying, (_, isPlaying) => isPlaying);

export const $currentTrackTime = player.createStore<ITime>({ min: 0, sec: 0 })
  .on(setCurrentTrackTime, (state, time) => {
    return {
      ...state,
      min: time.min,
      sec: time.sec
    };
  });

export const $trackTime = player.createStore<ITime>({ min: 0, sec: 0 })
  .on(setTrackTime, (_, time) => time);

export const $currentAudio = player.createStore<IAudio>({ audio: '', id: '' })
  .on(setCurrentAudio, (_, audio) => audio);


*/
