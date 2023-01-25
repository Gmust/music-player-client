export const secondsToTime = (time: number) => {

  const min = Math.floor(time / 60);
  const secRemain = Math.floor(time % 60);
  return {
    min,
    sec: secRemain
  };
};


export const formatSec = (sec: number) => {
  if (sec === 0) {
    return '00';
  } else if (sec < 9) {
    return `0${sec}`;
  } else {
    return sec;
  }
};