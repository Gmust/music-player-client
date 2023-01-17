import { createDomain } from 'effector';
import { ITime } from '../../models/player';


const player = createDomain();

export const setCurrentAudio = player.createEvent<string>();
export const setVolume = player.createEvent<number>();
export const setIsPlaying = player.createEvent<boolean>();
export const setCurrentTrackTime = player.createEvent<ITime>();
export const setTrackTime = player.createEvent<ITime>();

export const $volume = player.createStore(0.3)
  .on(setVolume, (_, volume) => volume);

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

export const $currentAudio = player.createStore<string>('')
  .on(setCurrentAudio, (_, audio) => audio);


/*
export const $volume = player.createStore<number>(0.3)
  .on(setVolume, (_, vol) => vol);

export const $isPlaying = player.createStore<boolean>(false)
  .on(setIsPlaying, (_, isPlaying) => isPlaying);

export const $trackTime = player.createStore<ITime>({ min: 0, sec: 0 })
  .on(setTrackTime, (_, trackTime) => trackTime);

export const $currentTime = player.createStore<ITime>({ min: 0, sec: 0 })
  .on(setCurrentTrackTime, (_, currentTrackTime) => currentTrackTime);*/
