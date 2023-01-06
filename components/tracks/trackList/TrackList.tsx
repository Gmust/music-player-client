import React from 'react';
import { ITrack } from '../../../models/tracks';
import styles from './TrackList.module.css';
import { TrackItem } from './trackItem/TrackItem';

const mockedTracks: ITrack[] = [
  {
    _id: '1',
    name: 'Devil dogs',
    artist: 'Sabaton',
    text: 'text',
    listens: 1000,
    audio: 'http://localhost:8080/audio/47f5aad6-389a-416b-a678-e03cb2d030ea.mp3',
    picture: 'http://localhost:8080/picture/3eb53d2a-5716-47de-af78-14ef20100f4a.png',
    comments: [{ _id: '1', text: 'cool ', username: 'coolguy' }]
  },
  {
    _id: '2',
    name: 'Devil dogs',
    artist: 'Sabaton',
    text: 'text',
    listens: 1000,
    audio: 'http://localhost:8080/audio/47f5aad6-389a-416b-a678-e03cb2d030ea.mp3',
    picture: 'http://localhost:8080/picture/3eb53d2a-5716-47de-af78-14ef20100f4a.png',
    comments: [{ _id: '1', text: 'cool ', username: 'coolguy' }]
  },
  {
    _id: '3',
    name: 'Devil dogs',
    artist: 'Sabaton',
    text: 'text',
    listens: 1000,
    audio: 'http://localhost:8080/audio/47f5aad6-389a-416b-a678-e03cb2d030ea.mp3',
    picture: 'http://localhost:8080/picture/3eb53d2a-5716-47de-af78-14ef20100f4a.png',
    comments: [{ _id: '1', text: 'cool ', username: 'coolguy' }]
  }
];


export const TrackList = () => {
  return (
    <div className={styles.trackListWrapper}>
      <ul>
        {
          mockedTracks.map((track) =>
            <li  key={track._id}><TrackItem {...track} /></li>)
        }
      </ul>
    </div>
  );
};

