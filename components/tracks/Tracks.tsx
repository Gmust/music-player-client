'use client';
import React from 'react';
import styles from './Tracks.module.css';
import Modal from '../../app/assets/Modal/Modal';
import { $modal, setShowModal } from '../../store/view';
import { useStore } from 'effector-react';
import { TrackList } from './trackList/TrackList';
import {  StepperWrapper } from './stepper/Stepper';


export const Tracks = () => {

  const showModal = useStore($modal);

  return (
    <div className={styles.tracksWrapper}>

      <div className={styles.uploadTrack}>
        <h1>Track list</h1>

        <button onClick={() => setShowModal(true)}> Upload new Track</button>
      </div>

      <div className={styles.tracksListWrapper}>
        <TrackList />
      </div>

      <Modal showModal={showModal}>
        <StepperWrapper />
      </Modal>

    </div>
  );
};

