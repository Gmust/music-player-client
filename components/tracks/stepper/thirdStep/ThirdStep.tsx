import React, { useEffect } from 'react';
import styles from './ThirdStepper.module.css';
import { FcUpload } from 'react-icons/fc';
import {
  $cover,
  $newTrack,
  $trackData,
  createTrackFx,
  setNewTrack
} from '../../../../store/stepper';
import FormData from 'form-data';
import { useStore } from 'effector-react';
import { AiOutlineSend } from 'react-icons/ai';
import { $isValid, setIsValid } from '../../../../store/player';

export const ThirdStep = () => {

  const trackData = useStore($trackData);
  const cover = useStore($cover);
  const newTrack = useStore($newTrack);
  const isValid = useStore($isValid);
  const loading = useStore(createTrackFx.pending)

  useEffect(() => {
    if (newTrack !== null) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [newTrack]);

  createTrackFx.pending.watch(console.log);

  const sendTrack = () => {
    const formData = new FormData();
    formData.append('name', trackData.name);
    formData.append('artist', trackData.artist);
    formData.append('text', trackData.text);
    formData.append('picture', cover);
    formData.append('audio', newTrack);
    createTrackFx(formData);
  };

  return (
    <div className={styles.thirdStepWrapper}>
      {
        newTrack != null ?
          <div style={{ color: 'black', marginBottom: '10px', marginTop: '5px' }}>
            {newTrack.name}.{newTrack.type}
          </div>
          : null
      }


      <div className={styles.uploadBtnWrapper}>
        <button className={styles.uploadBtnStyle}>
          Upload a track
          <FcUpload size={25} />
        </button>
        <input type='file' accept='audio/*' onChange={(e) => {
          setNewTrack(e.target.files![0]!);
        }} />
      </div>

      <div className={styles.confirmButton}>
        <button disabled={isValid === true ? false : true} className={isValid ? styles.activeBtn : styles.disableBtn}
                onClick={() => {
                  sendTrack();
                }}>
          Submit
          <AiOutlineSend size={20} />
        </button>
      </div>

      <div style={{ color: 'black', border: '1px solid black' }}>
        {loading ? <span>Loading</span> : <span>Set Image</span>}
      </div>

    </div>
  );
};

