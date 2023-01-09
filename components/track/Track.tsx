'use client';
import React from 'react';
import styles from './Track.module.css';
import Image from 'next/image';
import { CommentsForm } from './commentForm/CommentsForm';
import { Comments } from './comments/Comments';
import { ITrack } from '../../models/tracks';

const track: ITrack = {
  _id: '1',
  name: 'Devil dogs',
  artist: 'Sabaton',
  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci animi deserunt impedit neque quo. Commodi, debitis dolores ea earum eius id incidunt, natus neque non ratione recusandae tenetur totam vel.\n  ',
  listens: 1000,
  audio: 'http://localhost:8080/audio/47f5aad6-389a-416b-a678-e03cb2d030ea.mp3',
  picture: 'http://localhost:8080/picture/3eb53d2a-5716-47de-af78-14ef20100f4a.png',
  comments: [
    { _id: '1', text: 'cool ', username: 'coolguy' },
    { _id: '2', text: 'cool ', username: 'coolguy' },
    { _id: '3', text: 'cool ', username: 'coolguy' },
    { _id: '4', text: 'cool ', username: 'coolguy' },
    { _id: '5', text: 'cool ', username: 'coolguy' },
  ]
};

export const Track = ({ id }: any) => {

  const commentsList = track.comments

  return (
    <div className={styles.trackWrapper}>

      <div className={styles.trackHead}>
        <Image src={track.picture} alt={''} height={300} width={300} />

        <div>
          <h1>{track.name}</h1>
          <br />
          <h2>Created by: {track.artist}</h2>
          <br />
          <div className={styles.listens}>
            <span>Listens: </span>
            <span> {track.listens}</span>
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
        <Comments comments={commentsList}  />
      </div>


    </div>
  );
};

