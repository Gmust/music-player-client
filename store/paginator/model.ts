import { createDomain, sample } from 'effector';
import { TracksApi } from '../../api/tracksApi';


const paginator = createDomain();

export const setCount = paginator.createEvent<number>();
export const setOffset = paginator.createEvent<number>();
export const setIsBottom = paginator.createEvent<boolean>();
export const setTotalAmount = paginator.createEvent<number>();
export const setCurrentPage = paginator.createEvent<number>();


export const loadMoreTracksFx = paginator.createEffect({
  handler: (offset: number) => {
    TracksApi.getTracks(offset);
  }
});

export const $count = paginator.createStore(9);

export const $offSet = paginator.createStore(0)
  .on(setOffset, (_, offset) => {
    return offset;
  });

export const $totalAmount = paginator.createStore<number>(0)
  .on(setTotalAmount, amount => amount);

export const $currentPage = paginator.createStore<number>(1)
  .on(setCurrentPage, (_, page) => page);



sample({
  clock: setOffset,
  source: $offSet,
  target: loadMoreTracksFx
});