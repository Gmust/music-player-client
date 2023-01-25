import React from 'react';
import styles from './Router.module.css';
import { routes } from '../../Routes';
import { IRoutes } from '../../models';
import Link from 'next/link';

export const Router = () => {
  return (
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
  );
};

