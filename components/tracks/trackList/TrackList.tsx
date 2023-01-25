import React, { useEffect } from 'react';
import { ITrack } from '../../../models/tracks';
import styles from './TrackList.module.css';
import { TrackItem } from './trackItem/TrackItem';
import { useStore } from 'effector-react';
import { $tracks } from '../../../store/tracks';


export const TrackList = () => {

  const tracks = useStore($tracks);

  useEffect(() => {
  }, [tracks]);

  return (
    <>
      {tracks.length !== 0 ?
        <div className={styles.trackListWrapper}>
          <ul className={styles.ulStyle}>
            {
              tracks.map((track) =>
                <li className={styles.liStyle} key={track._id}><TrackItem {...track} /></li>)
            }
          </ul>
        </div>
        :
        <div className={styles.notFound}>
          No tracks found
        </div>
      }
    </>

  );
};

