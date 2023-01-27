import React, { useEffect } from 'react';
import styles from './TrackList.module.css';
import { TrackItem } from './trackItem/TrackItem';
import { useStore } from 'effector-react';
import { $tracks } from '../../../store/tracks';
import { Paginator } from '../../../assets/pagination/Paginator';


export const TrackList = () => {

  const tracks = useStore($tracks);

  useEffect(()=> {}, [tracks])

  return (
    <>
      {tracks.length !== 0 ?
        <div>
          <div className={styles.trackListWrapper}>
            <ul className={styles.ulStyle}>
              {
                tracks.map((track) =>
                  <li className={styles.liStyle} key={track._id}><TrackItem {...track} /></li>)
              }
            </ul>
          </div>

          <Paginator/>
        </div>

        :
        <div className={styles.notFound}>
          No tracks found
        </div>
      }
    </>

  );
};

