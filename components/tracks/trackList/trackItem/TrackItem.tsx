import React, { FC, useRef } from 'react';
import { ITrack } from '../../../../models/tracks';
import styles from './TrackItem.module.css';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import TrackItemPlayer from './trackItemPlayer/TrackItemPlayer';

export const TrackItem: FC<ITrack> = ({ _id, comments, audio, listens, artist, picture, text, name }) => {

  const router = useRouter();


  return (
    <div className={styles.trackItemWrapper}>
      <div className={styles.trackInfo}
           onClick={() => {
             router.push(`tracks/${_id}`);
           }}>
        <h2>{name}</h2>
        <span>by: {artist}</span>

        <div className={styles.trackImg}>
          {
            picture ?
              <Image src={'http://localhost:8080/' +  picture} alt={''} width={150} priority={false} height={150} />
              :
              ''
          }
        </div>
      </div>


      <div className={styles.playerStyle}>
        <TrackItemPlayer audio={'http://localhost:8080/'+audio} _id={_id} artist={artist} name={name}
                         picture={'http://localhost:8080/'+picture}
        />
      </div>

    </div>
  );
};

