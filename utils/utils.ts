import { ICurrentTrack, ITrack } from '../models/tracks';
import { $tracks } from '../store/tracks';
import { setCurrentTrack } from '../store/player';
import { setOffset } from '../store/paginator';


export function getRandomArrayElement(arr: ITrack[]) {
  return arr[Math.floor(Math.random() * arr.length)]!;
}

export const changeTrack = (currentTrack: ICurrentTrack) => {

  const tracks = $tracks.getState();

  let rand = getRandomArrayElement(tracks);

  let nextTrack = getRandomArrayElement(tracks);

  if (nextTrack._id === currentTrack._id) {
    return nextTrack = getRandomArrayElement(tracks);
  } else if (nextTrack._id !== currentTrack._id) {
    return setCurrentTrack({
      ...nextTrack, picture: `http://localhost:8080/${nextTrack.picture}`,
      audio: `http://localhost:8080/${nextTrack.audio}`
    });
  }
};


export function formatTrackName(name: string) {
  if (name.length > 15) {
    let newName = name.slice(0, 14);
    return `${newName}...`;
  }
  return name;
}



