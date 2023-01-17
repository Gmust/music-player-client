import React, { FC, useEffect } from 'react';
import { BiAbacus, BiPause, BiPlay, BiSkipNext, BiSkipPrevious } from 'react-icons/bi';
import styles from './TrackControls.module.css';
import { ICurrentTrack } from '../../../models/tracks';
import { useStore } from 'effector-react';
import { $isPlaying, setIsPlaying } from '../../../store/player';
import { PlayFunction } from 'use-sound/dist/types';

type TTrackControls = {
  play: PlayFunction;
  duration: number;
  sound: any;
  seconds: number
  pause: (id?: string | undefined) => void;
  trackInfo: Pick<ICurrentTrack, 'trackTime' | 'duration' | 'currentTrackTime'>
}

export const TrackControls: FC<TTrackControls> =
  ({ trackInfo, duration, sound, play, pause, seconds }) => {

    const isPlaying = useStore($isPlaying);

    useEffect(() => {
      if (isPlaying) {
        play();
      }
    }, [duration]);



    const playingButton = () => {
      if (isPlaying) {
        pause();
        setIsPlaying(false);
      } else {
        play();
        setIsPlaying(true);
      }
    };

    return (
      <div className={styles.trackControlsWrapper}>

        <div className={styles.buttonsWrapper}>
          <BiSkipPrevious color={'green'} size={45} />
          {isPlaying ?
            <BiPause color={'green'} size={45} onClick={playingButton} />
            :
            <BiPlay color={'green'} size={45} onClick={playingButton} />

          }
          <BiSkipNext color={'green'} size={45} />
        </div>

        <div className={styles.timeRangeWrapper}>
          <p>
            {trackInfo.currentTrackTime.min}:{trackInfo.currentTrackTime.sec}
          </p>
          <input
            type='range'
            min='0'
            max={duration / 1000}
            value={seconds}
            className='timeline'
            onChange={(e) => {
              sound.seek([e.target.value]);
            }}
          />
          <p>
            {trackInfo.trackTime.min}:{trackInfo.trackTime.sec}
          </p>
        </div>

      </div>
    );
  };

export default TrackControls;