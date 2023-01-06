import React, { Dispatch, SetStateAction } from 'react';
import styles from './Drawer.module.css';
import { routes } from '../../Routes';
import { IRoutes } from '../../models';
import Link from 'next/link';
import { FaWindowClose } from 'react-icons/fa';

type TDrawerProps = {
  openDrawer: boolean;
  setOpenDrawer: Dispatch<SetStateAction<boolean>>
}

export const Drawer: React.FC<TDrawerProps> = ({ setOpenDrawer, openDrawer }) => {


  return (
    <div className={styles.drawerContainer}>

      <ul className={styles.routerContainer}>
        {routes.map(({ label, icon, href }: IRoutes) =>
          <li key={href}>
            <span>
              {icon}
              {' '}
              <Link href={href}>{label}</Link>
            </span>
          </li>
        )}
      </ul>

      <div className={styles.closeBtn}>
        <button onClick={() => setOpenDrawer(false)}>
          <FaWindowClose size={25} color={'red'}/>
        </button>
      </div>

    </div>
  );
};

