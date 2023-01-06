import React, { FC } from 'react';
import { ITrack } from '../../../../models/tracks';
import styles from './TrackItem.module.css'
import Image from 'next/image';
import ReactAudioPlayer from 'react-audio-player';

export const TrackItem: FC<ITrack> = ({ _id, comments, audio, listens, artist, picture, text, name }) =>
{
  return (
    <div className={styles.trackItemWrapper} >
      <div className={styles.trackInfo}>
        <h2>{name}</h2>
        <span>by: {artist}</span>
        <Image className={styles.trackImg} src={picture} alt={''} width={200} height={200}/>
      </div>

      <ReactAudioPlayer src={audio} controls volume={0.1} />

    </div>
  );
};

