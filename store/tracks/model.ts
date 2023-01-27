import { createDomain } from 'effector';
import { TracksApi } from '../../api/tracksApi';
import { ITrack } from '../../models/tracks';
import { forward } from 'effector/effector.mjs';


const tracks = createDomain();

export const getTotalAmountFx = tracks.createEffect({
  handler: async ()=> {
    return await  TracksApi.getTracksAmount();
  }
})

export const getTracksFx = tracks.createEffect({
  handler: async (offset?: number) => {
    return await TracksApi.getTracks(offset);
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

export const searchByParamFx = tracks.createEffect({
  handler: async (param: string) => {
    return await TracksApi.searchByName(param);
  }
});

export const setTracks = tracks.createEvent();
export const setTrack = tracks.createEvent();
export const setParamInput = tracks.createEvent<string>();


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
}).on(setTrack, (val, track) => track);


export const $param = tracks.createStore('')
  .on(setParamInput, (_, val) => val);

forward({
  from: $param,
  to: searchByParamFx
});

