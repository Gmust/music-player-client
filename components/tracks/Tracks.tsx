'use client';
import React, { useEffect } from 'react';
import styles from './Tracks.module.css';
import Modal from '../../assets/Modal/Modal';
import { $modal, setShowModal } from '../../store/view/model';
import { useStore } from 'effector-react';
import { TrackList } from './trackList/TrackList';
import { StepperWrapper } from './stepper/Stepper';
import { getTracksFx } from '../../store/tracks';


export const Tracks = () => {

  const showModal = useStore($modal);

  useEffect(() => {
    getTracksFx();
  }, []);

  return (
    <>
      <div className={styles.tracksWrapper}>

        <div className={styles.uploadTrack}>
          <h1>Track list</h1>

          <button onClick={() => setShowModal(true)}> Upload new Track</button>
        </div>

        <div className={styles.tracksListWrapper}>
          <TrackList />
        </div>


      </div>
      <Modal showModal={showModal}>
        <StepperWrapper />
      </Modal>
    </>

  );
};

