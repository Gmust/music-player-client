import React, { FC } from 'react';
import Image from 'next/image';
import styles from './TrackInfo.module.css';

type TTrackInfo = {
  image: string,
  name: string,
  artist: string
}

export const TrackInfo: FC<TTrackInfo> = ({ artist, image, name }) => {
  return (
    <div className={styles.trackInfoWrapper}>

      {
        <Image src={image} alt={''} width={60} height={60} />
      }

      <div>
        <p>{name}</p>
        <p>{artist}</p>
      </div>

    </div>
  );
};

