import React, { useEffect, useState } from 'react';
import { useStore } from 'effector-react';
import {
  $count,
  $currentPage,
  setCurrentPage,
  setOffset
} from '../../store/paginator';
import styles from './Paginator.module.css';
import { FcNext, FcPrevious } from 'react-icons/fc';
import { TracksApi } from '../../api/tracksApi';
import { $tracks } from '../../store/tracks';

export const Paginator = () => {

  const [totalAmount, setTotalAmount] = useState(1);

  const count = useStore($count);
  const currentPage = useStore($currentPage);
  const tracks = useStore($tracks);
  const pagesCount = Math.ceil(totalAmount / count);

  const pages = [];

  for (let i = 0; i < pagesCount; i++) {
    pages.push(i + 1);
  }

  useEffect(() => {
    const getTotalAmount = async () => {
      const resp = await TracksApi.getTracksAmount();
      setTotalAmount(resp!);
    };

    const loadNewTracks = () => {
      if (currentPage === 1) {
        setOffset(0);
      } else {
        setOffset((currentPage - 1) * 9);
      }
    };

    loadNewTracks();

    getTotalAmount();
  }, [currentPage]);


  return (
    <div className={styles.paginatorWrapper}>
      <FcPrevious color='green' style={{ cursor: 'pointer' }} size={20}
                  onClick={() => setCurrentPage(currentPage - 1)} />

      {pages.map((p) =>
        <div onClick={() => {
          setCurrentPage(p);
        }} key={p}
             className={currentPage === p ? `${styles.paginatorItem} ${styles.active} ` : styles.paginatorItem}>
          {p}
        </div>
      )}
      <FcNext color='green' size={20} style={{ cursor: 'pointer' }} onClick={() => setCurrentPage(currentPage + 1)} />
    </div>
  );
};


