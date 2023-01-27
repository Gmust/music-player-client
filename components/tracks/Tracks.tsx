'use client';
import React, { useEffect } from 'react';
import styles from './Tracks.module.css';
import Modal from '../../assets/Modal/Modal';
import { $modal, setShowModal } from '../../store/view';
import { useStore } from 'effector-react';
import { TrackList } from './trackList/TrackList';
import { StepperWrapper } from './stepper/Stepper';
import { getTotalAmountFx, getTracksFx, searchByParamFx, setParamInput } from '../../store/tracks';
import { BiSearchAlt } from 'react-icons/bi';
import { TracksApi } from '../../api/tracksApi';


export const Tracks = () => {

  const showModal = useStore($modal);
  const pending = useStore(getTracksFx.pending);

  useEffect(() => {
    getTracksFx();
  }, []);

  return (
    <>
      <div className={styles.tracksWrapper}>

        <div className={styles.uploadTrack}>
          <h1>Track list</h1>

          <div className={styles.searchStyle}>
            <BiSearchAlt className={styles.icon} color={'green'} size={25} />
            <input onChange={(e) => searchByParamFx(e.target.value)} />
          </div>

          <button onClick={() => setShowModal(true)}> Upload new Track</button>
        </div>


        <div className={styles.tracksListWrapper}>
          {pending}
          <TrackList />
        </div>


      </div>
      <Modal showModal={showModal}>
        <StepperWrapper />
      </Modal>
    </>

  );
};

