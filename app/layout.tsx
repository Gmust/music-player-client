'use client';
import React, { useState } from 'react';
import '../styles/globals.css';
import styles from '../styles/Home.module.css';
import { Drawer } from '../components/sidebar/Drawer';
import { AiOutlineMenuUnfold } from 'react-icons/ai';
import { FooterNavigation } from '../components/footerNavigation/FooterNavigation';
import useDeviceSize from '../utils/hooks';
import FooterPlayer from '../components/footerPlayer/FooterPlayer';
import { useStore } from 'effector-react';
import { $currentTrack } from '../store/player';

export default function RootLayout({
                                     children
                                   }: {
  children: React.ReactNode
}) {

  const [openDrawer, setOpenDrawer] = useState(false);
  const [width, height] = useDeviceSize();
  const currentTrack = useStore($currentTrack);

  return (
    <html>
    <head />
    <body className={styles.mainWrapper}>


    {
      width! <= 960 ?
        <div className={styles.footerNav}>
          <FooterNavigation />
        </div>
        :

        <div className={styles.sideBar}>

          <div className={openDrawer ? '' : styles.drawerNotVisible}>
            <Drawer openDrawer={openDrawer} setOpenDrawer={setOpenDrawer} />
          </div>

          {!openDrawer &&
            <div className={styles.drawerIcon}>
              <AiOutlineMenuUnfold onClick={() => setOpenDrawer(true)} size={50} />
            </div>
          }
        </div>
    }

    {
      currentTrack ?
        <div className={styles.footerPlayer}>
          <FooterPlayer />
        </div>
        :
        null
    }


    <div className={styles.pagesWrapper}>
      {children}
    </div>

    </body>
    </html>
  );
}
