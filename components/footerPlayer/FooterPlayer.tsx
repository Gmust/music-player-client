import React, { useEffect, useState } from 'react';
import styles from './FooterPlayer.module.css';
import { useStore } from 'effector-react';
import {
  $currentAudio,
  $currentTrackTime,
  $isPlaying,
  $trackTime,
  $volume, setCurrentTrackTime, setIsPlaying,
  setTrackTime,
  setVolume
} from '../../store/player';
import { TrackInfo } from './trackInfo/TrackInfo';
import useSound from 'use-sound';
import TrackControls from './trackControls/TrackControls';
import { getTrackFx } from '../../store/tracks';


const FooterPlayer = () => {

  const currentTrack = useStore($currentAudio);
  const volume = useStore($volume);
  const isPlaying = useStore($isPlaying);
  const currentTrackTime = useStore($currentTrackTime);
  const trackTime = useStore($trackTime);
  const [play, { duration, sound, stop, pause }] = useSound(currentTrack, { volume: volume });

  const [seconds, setSeconds] = useState(0);

  const pending = useStore(getTrackFx.pending);

  useEffect(() => {
    if (duration) {
      const sec = duration / 1000;
      const min = Math.floor(sec / 60);
      const secRemain = Math.floor(sec % 60);
      setTrackTime({
        min: min,
        sec: secRemain
      });
    }
  }, [isPlaying, duration]);


  useEffect(() => {
    const interval = setInterval(() => {
      if (sound) {
        setSeconds(sound.seek([]));
        const min = Math.floor(sound.seek([]) / 60);
        const sec = Math.floor(sound.seek([]) % 60);
        setCurrentTrackTime({
          min,
          sec
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [sound, currentTrackTime]);

  useEffect(() => {
    stop();
    console.log('stopped')
  }, [currentTrack]);

  return (
    <div className={styles.footerPlayerWrapper}>

      <TrackInfo />

      <TrackControls trackInfo={{
        duration: duration,
        trackTime: trackTime,
        currentTrackTime: currentTrackTime
      }} pause={pause} play={play} duration={duration!} sound={sound} seconds={seconds} />

      <div>
        <input type='range' id='volume' min={0.001} max={1} step={0.01}
               value={volume}
               onChange={(e) => setVolume(Number(e.currentTarget.value))} />
      </div>

    </div>
  );
};

export default FooterPlayer;