import React from 'react';

import AppNavbar from '../AppNavbar';

import styles from './appHeader.css';

const AppHeader = () => (
  <div className={styles.appHeader}>
    <div className={styles.logoContainer}>
      <img src="https://www.fintechfutures.com/files/2019/07/logo_-_dribbble.png" alt="logo" />
    </div>
    <AppNavbar />
  </div>
);

export default AppHeader;
