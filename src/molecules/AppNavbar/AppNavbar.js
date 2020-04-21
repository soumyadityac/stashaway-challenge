import React from 'react';

import _map from 'lodash/map';
import _noop from 'lodash/noop';

import { APP_PAGES } from 'utils/constants/general';

import styles from './appNavbar.css';

const AppNavbar = () => (
  <div className={styles.pageNavContainer}>
    {_map(APP_PAGES, ({ label, href }) => (
      <button key={`${label}-${href}`} onClick={_noop}>{label}</button>
    ))}
  </div>
);

export default AppNavbar;
