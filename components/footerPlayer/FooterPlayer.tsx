import React, { useEffect } from 'react';
import styles from './FooterPlayer.module.css';
import { useStore } from 'effector-react';
import {
  $currentTrack,
  $isPlaying,
  $volume,
  setVolume
} from '../../store/player';
import { TrackInfo } from './trackInfo/TrackInfo';
import TrackControls from './trackControls/TrackControls';
import { $tracks } from '../../store/tracks';


const FooterPlayer = () => {
  const currentTrack = useStore($currentTrack);
  const tracks = useStore($tracks);
  const volume = useStore($volume);
  const isPlaying = useStore($isPlaying);


  useEffect(() => {
  }, [currentTrack]);

  return (
    <div className={styles.footerPlayerWrapper}>

      <TrackInfo name={currentTrack.name} artist={currentTrack.artist} image={currentTrack.picture} />

      <TrackControls url={currentTrack.audio} volume={volume} isPlaying={isPlaying} />

      <div>
        <input type='range' id='volume' min={0.001} max={1} step={0.01}
               value={volume}
               onChange={(e) => setVolume(Number(e.currentTarget.value))} />
      </div>

    </div>
  );
};

export default FooterPlayer;