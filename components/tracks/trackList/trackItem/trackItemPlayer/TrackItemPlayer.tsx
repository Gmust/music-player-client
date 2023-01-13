import React, { FC, useEffect, useState } from 'react';
import useSound from 'use-sound';
import { BsFillPauseFill, BsFillPlayFill, BsFillVolumeUpFill } from 'react-icons/bs';
import styles from './TrackItemPlayer.module.css';

type TPlayerProps = {
  audio: string
}

export const TrackItemPlayer: FC<TPlayerProps> = ({ audio }) => {

  const [volume, setVolume] = useState(0.3);
  const [play, { pause, stop, sound, duration }] = useSound(audio, { volume: volume });
  const [isPlaying, setIsPlaying] = useState(false);
  const [seconds, setSeconds] = useState();
  const [trackTime, setTrackTime] = useState({
    min: 0,
    sec: 0
  });
  const [currentTrackTime, setCurrentTrackTime] = useState({
    min: 0,
    sec: 0
  });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    if (duration) {
      const sec = duration / 60;
      const min = Math.floor(sec / 60);
      const secRemain = Math.floor(sec % 60);
      setTrackTime({
        sec: secRemain,
        min: min
      });
    }
  }, [isPlaying]);

  useEffect(() => {
    if (sound) {
      setSeconds(sound.seek([]));
      const min = Math.floor(sound.seek([]) / 60);
      const sec = Math.floor(sound.seek([]) % 60);
      setCurrentTrackTime({
        sec: sec,
        min: min
      });
    }
  }, [sound]);

  const playingBtn = () => {
    if (isPlaying) {
      pause();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }

  };

  return (
    <div className={styles.trackItemPlayerWrapper} onClick={event => event.stopPropagation()}>

      <div className={styles.volumeStyle}
           onMouseLeave={() => setHover(false)}
      >
        <input type='range' id='volume' min={0.001} max={1} step={0.01}
               style={hover ? { opacity: 1 } : { opacity: 0 }}
               value={volume}
               onChange={(e) => setVolume(Number(e.currentTarget.value))} />

        <BsFillVolumeUpFill className={styles.soundIcon} size={30} onMouseEnter={() => setHover(true)} />
      </div>

      <div className={styles.playBtn}>
        {isPlaying ?
          <BsFillPauseFill color='green' onClick={playingBtn} size={40} />
          :
          <BsFillPlayFill color='green' onClick={playingBtn} size={40} />
        }
      </div>

    </div>
  );
};

export default TrackItemPlayer;