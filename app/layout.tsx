'use client';
import React, { useState } from 'react';
import '../styles/globals.css';
import styles from '../styles/Home.module.css';
import { Drawer } from '../components/sidebar/Drawer';
import { AiOutlineMenuUnfold } from 'react-icons/ai';

export default function RootLayout({
                                     children
                                   }: {
  children: React.ReactNode
}) {

  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <html>
    <head />
    <body className={styles.mainWrapper}>

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

    <div className={styles.pagesWrapper}>
      {children}
    </div>

    </body>
    </html>
  );
}
