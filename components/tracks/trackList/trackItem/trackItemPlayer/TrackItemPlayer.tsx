import React, { FC, useState } from 'react';
import { BsFillPauseFill, BsFillPlayFill, BsFillVolumeUpFill } from 'react-icons/bs';
import styles from './TrackItemPlayer.module.css';
import { useStore } from 'effector-react';
import { $volume, setCurrentAudio, setIsPlaying, setVolume } from '../../../../../store/player';

type TPlayerProps = {
  audio: string,
  id: string,
  picture: string,
  artist: string,
  name: string
}

export const TrackItemPlayer: FC<TPlayerProps> = ({ audio, id, artist, picture, name }) => {


  const [hover, setHover] = useState(false);
  const volume = useStore($volume);
  const isPlaying = true;
  /*


  const currentPlayerTrackTime = useStore($currentPlayerTrackTime);*/
//  const [volume, setVolume] = useState(0.3);
  /*  const [isPlaying, setIsPlaying] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const [trackTime, setTrackTime] = useState({
      min: 0,
      sec: 0
    });
    const [currentTrackTime, setCurrentTrackTime] = useState({
      min: 0,
      sec: 0
    });

    const [play, { pause, stop, sound, duration }] = useSound(audio, { volume: volume });


    const pending = useStore(getTracksFx.pending);

    useEffect(() => {
      if (!pending && duration) {
        const sec = duration / 1000;
        const min = Math.floor(sec / 60);
        const secRemain = Math.floor(sec % 60);
        setTrackTime({
          min: min,
          sec: secRemain
        });
      }
    }, [isPlaying, duration]);*/

  /*
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
          setPlayerCurrentTrackTime({
            min,
            sec
          });
        }
      }, 1000);
      return () => clearInterval(interval);
    }, [sound, currentPlayerTrackTime]);*/


  /* const playingBtn = () => {
     if (isPlaying) {
       pause();
       setIsPlaying(false);
       setIsCurrentTrackPlaying(false);
     } else {
       setCurrentTrack({
         audio: audio,
       });
       play();
       addOneListenFx(id);
       setIsPlaying(true);
       setIsCurrentTrackPlaying(true);
     }

   };*/

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
          {isPlaying ?
            <BsFillPauseFill color='green' onClick={() => {
              setCurrentAudio(audio);
              setIsPlaying(true)
            }} size={40} />
            :
            <BsFillPlayFill color='green' size={40} />
          }
        </div>

      </span>

      <div className={styles.trackTime}>

        {/* {currentTrackTime.min}:{currentTrackTime.sec}
        /
        {trackTime.min}:{trackTime.sec}*/}
      </div>
    </div>
  );
};

export default TrackItemPlayer;