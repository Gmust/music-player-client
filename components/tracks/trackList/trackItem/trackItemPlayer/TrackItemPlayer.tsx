import React, { FC, useEffect, useRef, useState } from 'react';
import { BsFillPauseFill, BsFillPlayFill, BsFillVolumeUpFill } from 'react-icons/bs';
import styles from './TrackItemPlayer.module.css';
import { useStore } from 'effector-react';
import {
  $currentTrack,
  $isPlaying,
  $volume,
  setCurrentTrack,
  setIsPlaying,
  setVolume
} from '../../../../../store/player';
import { ICurrentTrack } from '../../../../../models/tracks';
import ReactPlayer from 'react-player';
import { ITime } from '../../../../../models/player';
import { formatSec, secondsToTime } from '../../../../../utils/formatTime';


export const TrackItemPlayer: FC<ICurrentTrack> = ({ audio, _id, artist, picture, name }) => {

  const [hover, setHover] = useState(false);
  const [trackTime, setTrackTime] = useState<ITime>();
  const volume = useStore($volume);
  const isPlaying = useStore($isPlaying);
  const currentTrack = useStore($currentTrack);

  const audioRef = useRef<any>();

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isPlaying && currentTrack._id === _id || currentTrack._id === '' && isPlaying) {
      setIsPlaying(true);
      setIsActive(true);
    } else if (currentTrack._id !== _id) {
      setIsActive(false);
    } else if (!isPlaying && currentTrack.audio != '') {
      setIsActive(false);
    }
  }, [_id, currentTrack._id, isPlaying]);



  return (
    <div className={styles.trackItemPlayerWrapper} onClick={event => event.stopPropagation()}>

      <span>
        <div className={styles.volumeStyle}
             onMouseLeave={() => setHover(false)}
        >
          <input type='range' id='volume' min={0.001} max={1} step={0.01}
                 style={hover ? { opacity: 1 } : { opacity: 0 }}
                 value={volume}
                 onChange={(e) => setVolume(Number(e.currentTarget.value))} />

          <BsFillVolumeUpFill className={styles.soundIcon} size={30}
                              onMouseEnter={() => setHover(true)}
                              onClick={() => setHover(!hover)}

          />
        </div>

        <div className={styles.playBtn}>
          {isActive ?
            <BsFillPauseFill color='green' onClick={() => {
              setIsPlaying(false);
              setIsActive(false);
            }} size={40} />
            :
            <BsFillPlayFill color='green' size={40} onClick={() => {
              setCurrentTrack({ audio, _id, artist, picture, name });
              setIsPlaying(true);
            }}
            />
          }
        </div>

        <div className={styles.libPlayerWrapper}>
          <ReactPlayer
            ref={audioRef}
            url={audio} playing={false}
            onReady={() => {
              setTrackTime(secondsToTime(audioRef.current.getDuration()));
            }}
          />
        </div>
      </span>

      <span className={styles.trackTime}>
        {trackTime?.min!}
        :
        {formatSec(trackTime?.sec!)}
      </span>
    </div>
  );
};

export default TrackItemPlayer;