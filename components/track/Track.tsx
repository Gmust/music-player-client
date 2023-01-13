'use client';
import React, { useEffect } from 'react';
import styles from './Track.module.css';
import Image from 'next/image';
import { CommentsForm } from './commentForm/CommentsForm';
import { Comments } from './comments/Comments';
import { AiOutlineRollback } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import { $track, getTrackFx } from '../../store/tracks';
import { useStore } from 'effector-react';


export const Track = ({ id }: any) => {

  useEffect(() => {
    getTrackFx(id);
  }, [id]);

  const track = useStore($track);


  const commentsList = track.comments;
  const router = useRouter();

  return (
    <div className={styles.trackWrapper}>

      <div className={styles.returnBtn}>
        <button onClick={() => router.back()}>
          <AiOutlineRollback />
          Return to the list
        </button>
      </div>

      <div className={styles.trackHead}>
        <Image src={'http://localhost:8080/' + track.picture} alt={''} height={300} width={300} />

        <div>
          <h1>{track.name}</h1>
          <br />
          <h2>Created by: {track.artist}</h2>
          <br />
          <div className={styles.listens}>
            <span>Listens: </span>
            <span> {track.listens ? track.listens : track.listens = 0}</span>
          </div>
        </div>
      </div>


      <div className={styles.trackTextWrapper}>
        <p>
          {track.text}
        </p>
      </div>

      <div className={styles.trackCommentFormWrapper}>
        <CommentsForm />
      </div>

      <div className={styles.commentsWrapper}>
        <Comments comments={commentsList} />
      </div>


    </div>
  );
};

