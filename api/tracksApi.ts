import { instance } from './index';
import { setTrack, setTracks } from '../store/tracks';


export class TracksApi {

  static async getTracks() {
    try {
      const result = await instance.get('/tracks');
      return setTracks(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  static async getTrack(id: string) {
    try {
      const result = await instance.get(`/tracks/${id}`);
      return setTrack(result.data);
    } catch (e) {
      console.log(e);
    }
  };

  static async addListen(id: string) {
    try {
      const result = await instance.post(`/tracks/listen/${id}`);
    } catch (e) {
      console.log(e);
    }
  }

}