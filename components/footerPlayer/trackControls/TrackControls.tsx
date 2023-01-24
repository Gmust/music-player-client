import React, { FC, useEffect, useRef, useState } from 'react';
import { BiPause, BiPlay, BiSkipNext, BiSkipPrevious } from 'react-icons/bi';
import styles from './TrackControls.module.css';
import { $currentTrack, setCurrentTrack, setIsPlaying } from '../../../store/player';
import ReactPlayer from 'react-player';
import { useStore } from 'effector-react';
import { clearInterval } from 'timers';
import { formatSec, secondsToTime } from '../../../utils/formatTime';
import { ITime } from '../../../models/player';
import { changeTrack } from '../../../utils/utils';
import { TracksApi } from '../../../api/tracksApi';

type TTrackControls = {
  url: string
  volume: number
  isPlaying: boolean
}

export const TrackControls: FC<TTrackControls> = ({ url, isPlaying, volume }) => {

  const [seconds, setSeconds] = useState<number>();
  const [time, setTime] = useState<ITime>();
  const [currentTime, setCurrentTime] = useState<ITime>();
  const currentTrack = useStore($currentTrack);
  const audioInfo = useRef<any>();


  useEffect(() => {
    if (time?.sec === undefined || time.min === undefined) {
      setTime(audioInfo.current.getDuration());
    }
  }, [time]);


  return (
    <div className={styles.trackControlsWrapper}>

      <div className={styles.libPlayerWrapper}>
        <ReactPlayer
          onReady={() => {
            setSeconds(audioInfo.current.getDuration());
            setTime(secondsToTime(audioInfo.current.getDuration()));
          }}
          onSeek={() => {
            setCurrentTime(secondsToTime(audioInfo.current.getCurrentTime()));
          }}
          onProgress={() => setCurrentTime(secondsToTime(audioInfo.current.getCurrentTime()))}
          onEnded={() => {
            TracksApi.addListen(currentTrack._id);
            changeTrack(currentTrack);
          }}
          ref={audioInfo}
          url={url} config={{ file: { forceAudio: true } }} playing={isPlaying} volume={volume} />
      </div>

      <div className={styles.buttonsWrapper}>
        <BiSkipPrevious color={'green'} size={45} onClick={() => changeTrack(currentTrack)} />
        {isPlaying ?
          <BiPause color={'green'} size={45} onClick={() => {
            setIsPlaying(false);
          }} />
          :
          <BiPlay color={'green'} size={45} onClick={() => {
            setIsPlaying(true);
          }} />
        }
        <BiSkipNext color={'green'} size={45} onClick={() => changeTrack(currentTrack)} />
      </div>

      <div className={styles.timeRangeWrapper}>
        <p>
          {currentTime?.min}:{formatSec(currentTime?.sec!)}
        </p>

        <input type='range'
               min={0}
               value={currentTime?.min! * 60 + currentTime?.sec!}
               max={seconds}
               step={0.01}
               onChange={(e) => {
                 audioInfo.current.seekTo(Number(e.currentTarget.value), 'seconds');
               }}
        />

        <p>
          {time?.min}:{formatSec(time?.sec!)}
        </p>
      </div>
    </div>
  );
};

export default TrackControls;