import React, { FC } from 'react';
import { ITrack } from '../../../../models/tracks';
import styles from './TrackItem.module.css'
import Image from 'next/image';
import ReactAudioPlayer from 'react-audio-player';
import { useRouter } from 'next/navigation';

export const TrackItem: FC<ITrack> = ({ _id, comments, audio, listens, artist, picture, text, name }) =>
{

  const router = useRouter()


  return (
    <div className={styles.trackItemWrapper} onClick={()=> {
      router.push(`tracks/${_id}`);
    }} >
      <div className={styles.trackInfo}>
        <h2>{name}</h2>
        <span>by: {artist}</span>

        <div className={styles.trackImg} style={{}}>
          <Image  src={picture} alt={''} width={150} priority={false}  height={150}/>
        </div>
      </div>

      <div className={styles.playerStyle}>
        <ReactAudioPlayer src={audio} controls volume={0.1}  />
      </div>

    </div>
  );
};

