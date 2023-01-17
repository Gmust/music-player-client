export interface ITrack {
  _id: string;
  name: string,
  artist: string,
  text: string,
  listens: number,
  picture: string,
  audio: string,
  comments: IComment[]
}


export interface IComment {
  _id: string,
  username: string,
  text: string
}

export interface ICurrentTrack {
  _id: string;
  name: string,
  artist: string,
  picture: string,
  audio: string,
  volume: number,
  isPlaying: boolean,
  duration?: number | null,
  trackTime: ITrackTime
  currentTrackTime: ITrackTime
}

export interface ITrackTime {
  min: number,
  sec: number
}
