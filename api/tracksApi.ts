import { instance } from './index';
import {  setTrack, setTracks } from '../store/tracks';
import { setTotalAmount } from '../store/paginator';


export class TracksApi {


  static async getTracks(offset?: number | undefined, count?: number | undefined) {
    try {
      const result = await instance.get(`/tracks?offset=${offset ?? 0}&count=9`);
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

  static async getTracksAmount() {
    try {
      const result = await instance.get(`/tracks`);
      return setTotalAmount(result.data.length);
    } catch (e) {
      console.log(e);
    }
  }

  static async addListen(id: string) {
    try {
      const result = await instance.post(`/tracks/listen/${id}`);
    } catch (e) {
      console.log(e);
    }
  };

  static async createTrack(data: any) {
    try {
      const result = await instance.post(`/tracks`, data);
      return result;
    } catch (e) {
      console.log(e);
    }
  }

  static async deleteTrack(id: string) {
    try {
      const result = await instance.delete(`/tracks/${id}`);
      return result;
    } catch (e) {
      console.log(e);
    }
  }

  static async searchByName(param: string) {
    try {
      const result = await instance.get(`/tracks/search?query=${param}`);
      return setTracks(result.data);
    } catch (e) {
      console.log(e);
    }
  }

}