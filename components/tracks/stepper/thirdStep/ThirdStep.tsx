import React, { useState } from 'react';
import styles from './ThirdStepper.module.css';
import { FcUpload } from 'react-icons/fc';
import { $cover, $newTrack, $trackData, setNewCover, setNewTrack, setTrackData } from '../../../../store/stepper';
import FormData from 'form-data';
import { useStore } from 'effector-react';
import { TracksApi } from '../../../../api/tracksApi';
import { setStepperStep } from '../../../../store/view';
import { AiOutlineSend } from 'react-icons/ai';

export const ThirdStep = () => {

  const [valid, setIsValid] = useState<boolean>(false);
  const trackData = useStore($trackData);
  const cover = useStore($cover);
  const newTrack = useStore($newTrack);

  const onSubmit = () => {
    const formData = new FormData();
    formData.append('name', trackData.name);
    formData.append('artist', trackData.artist);
    formData.append('text', trackData.text);
    formData.append('picture', cover);
    formData.append('audio', newTrack);
    TracksApi.createTrack(formData)
      .then(() => {
        setStepperStep(0);
        setTrackData({ name: '', text: '', artist: '' });
        setNewCover(null as unknown as File);
        setNewTrack(null as unknown as File);
      });
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
          setIsValid(true);
        }} />
      </div>

      <div className={styles.confirmButton}>
        <button disabled={valid} className={valid ? styles.activeBtn : styles.disableBtn}
                onClick={() => {
                  valid ? onSubmit() : null;
                }}>
          Submit
          <AiOutlineSend size={20} />
        </button>
      </div>

    </div>
  );
};

