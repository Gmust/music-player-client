import React from 'react';
import { ITrack } from '../../../models/tracks';
import styles from './TrackList.module.css';
import { TrackItem } from './trackItem/TrackItem';
import { useStore } from 'effector-react';
import { $tracks } from '../../../store/tracks';


export const TrackList = () => {

  const tracks = useStore($tracks);

  return (
    <div className={styles.trackListWrapper}>
      <ul>
        {
          tracks.map((track) =>
            <li key={track._id}><TrackItem {...track} /></li>)
        }
      </ul>
    </div>
  );
};

