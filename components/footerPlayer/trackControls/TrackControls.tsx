import React, { FC } from 'react';
import { BiPlay, BiSkipNext, BiSkipPrevious } from 'react-icons/bi';
import styles from './TrackControls.module.css';
import { ICurrentTrack } from '../../../models/tracks';
import { useStore } from 'effector-react';
import { $currentPlayerTrackTime, $isPlaying, setCurrentTrack } from '../../../store/player';
import { PlayFunction } from 'use-sound/dist/types';

type TTrackControls = {
  play: PlayFunction;
  duration: number;
  sound: any;
  pause: (id?: string | undefined) => void;
  trackInfo: Pick<ICurrentTrack, 'trackTime' | 'duration'>
}

export const TrackControls: FC<TTrackControls> =
  ({ trackInfo, play, pause, duration, sound }) => {

    const isPlaying = useStore($isPlaying);
    const currentTrackTime = useStore($currentPlayerTrackTime);


    const playButton = () => {

    };


    return (
      <div className={styles.trackControlsWrapper}>

        <div className={styles.buttonsWrapper}>
          <BiSkipPrevious color={'green'} size={45} />
          <BiPlay color={'green'} size={45} />
          <BiSkipNext color={'green'} size={45} />
        </div>

        <div className={styles.timeRangeWrapper}>
          <p>
            {currentTrackTime.min}:{currentTrackTime.sec}
          </p>
          <input type='range' id='duration' min={0} step={0.01} max={duration}
                 value={currentTrackTime.min * 60 + currentTrackTime.sec} onChange={(e) => {
            sound.seek([e.target.value]);
          }} />
          <p>
            {trackInfo.trackTime.min}:{trackInfo.trackTime.sec}
          </p>
        </div>

      </div>
    );
  };

export default TrackControls;