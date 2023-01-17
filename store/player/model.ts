import { createDomain } from 'effector';
import { ICurrentTrack } from '../../models/tracks';
import { ITime } from '../../models/player';


const player = createDomain();

export const setCurrentTrack = player.createEvent<ICurrentTrack>();
export const setVolume = player.createEvent<number>();
export const setIsCurrentTrackPlaying = player.createEvent<boolean>();
export const setPlayerCurrentTrackTime = player.createEvent<ITime>();

export const $volume = player.createStore(0.3)
  .on(setVolume, (_, volume) => volume);

export const $isPlaying = player.createStore(false)
  .on(setIsCurrentTrackPlaying, (_, isPlaying) => isPlaying);

export const $currentPlayerTrackTime = player.createStore<ITime>({ min: 0, sec: 0 })
  .on(setPlayerCurrentTrackTime, (state, time) => {
    return {
      ...state,
      min: time.min,
      sec: time.sec
    };
  });

export const $currentTrack = player.createStore<ICurrentTrack>({
  _id: '',
  picture: '',
  name: '',
  audio: '',
  artist: '',
  trackTime: { min: 0, sec: 0 },
  volume: 0,
  isPlaying: false,
  duration: 0
})
  .on(setCurrentTrack, (_, track) => track);


/*
export const $volume = player.createStore<number>(0.3)
  .on(setVolume, (_, vol) => vol);

export const $isPlaying = player.createStore<boolean>(false)
  .on(setIsPlaying, (_, isPlaying) => isPlaying);

export const $trackTime = player.createStore<ITime>({ min: 0, sec: 0 })
  .on(setTrackTime, (_, trackTime) => trackTime);

export const $currentTime = player.createStore<ITime>({ min: 0, sec: 0 })
  .on(setCurrentTrackTime, (_, currentTrackTime) => currentTrackTime);*/
