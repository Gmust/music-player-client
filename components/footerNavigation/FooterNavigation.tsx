import React from 'react';
import styles from './FooterNavigation.module.css';
import { Router } from '../../assets/router/Router';

export const FooterNavigation = () => {
  return (
    <div className={styles.footerNavWrapper}>

      <Router />

    </div>
  );
};

