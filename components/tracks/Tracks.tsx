import React from 'react';
import styles from './Tracks.module.css';


export const Tracks = () => {
  return (
    <div className={styles.tracksWrapper}>

      <div className={styles.uploadTrack}>
        <h1>Track list</h1>

        <button> Upload new Track</button>
      </div>


    </div>
  );
};

