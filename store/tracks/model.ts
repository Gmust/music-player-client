import { createDomain } from 'effector';
import { TracksApi } from '../../api/tracksApi';
import { ITrack } from '../../models/tracks';


const tracks = createDomain();


export const getTracksFx = tracks.createEffect({
  handler: async () => {
    return await TracksApi.getTracks();
  }
});

export const getTrackFx = tracks.createEffect({
  handler: async (id: string) => {
    return await TracksApi.getTrack(id);
  }
});

export const addOneListenFx = tracks.createEffect({
  handler: async (id: string) => {
    return await TracksApi.addListen(id);
  }
});

export const setTracks = tracks.createEvent();
export const setTrack = tracks.createEvent();


export const $tracks = tracks.createStore<ITrack[]>([])
  .on(setTracks, (_, tracks) => tracks);

export const $track = tracks.createStore<ITrack>({
  _id: '',
  picture: '',
  name: '',
  comments: [],
  audio: '',
  text: '',
  artist: '',
  listens: 0
}).on(setTrack, (_, track) => track);