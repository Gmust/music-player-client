import React, { useEffect, useState } from 'react';
import styles from './FooterPlayer.module.css';
import { useStore } from 'effector-react';
import { $currentTrack, setCurrentTrack } from '../../store/player';
import { TrackInfo } from './trackInfo/TrackInfo';
import useSound from 'use-sound';
import TrackControls from './trackControls/TrackControls';

const FooterPlayer = () => {

  const currentTrack = useStore($currentTrack);


  const [play, { pause, stop, sound, duration }] = useSound(currentTrack.audio, { volume: currentTrack.volume });


  return (
    <div className={styles.footerPlayerWrapper}>

      <TrackInfo image={currentTrack.picture} name={currentTrack.name} artist={currentTrack.artist} />

      <TrackControls trackInfo={{ ...currentTrack }} pause={pause} play={play} duration={duration!} sound={sound} />

      <div>
        <input type={'range'} value={currentTrack.volume} />
      </div>

    </div>
  );
};

export default FooterPlayer;