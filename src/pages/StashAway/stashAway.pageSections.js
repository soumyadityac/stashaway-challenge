import { createSelector } from 'reselect';

import _map from 'lodash/map';

import { defaultSelector } from 'utils';
import { EMPTY_ARRAY } from 'utils/constants/app.constants';

import { PAGE_COMPONENT_KEYS, TAB_PANES } from './stashAway.constants';

import styles from './stashAway.css';

const getMainBodySections = (selectedTabItemKey) => {
  switch (selectedTabItemKey) {
    case TAB_PANES.OVERVIEW:
      return [{
        rows: [
          {
            columns: [PAGE_COMPONENT_KEYS.SECTION_TITLE],
          },
          {
            columns: [PAGE_COMPONENT_KEYS.BENCHMARK_SELECTOR],
          },
          {
            columns: [PAGE_COMPONENT_KEYS.RANGE_SELECTOR],
          },
          {
            columns: [PAGE_COMPONENT_KEYS.CHART],
          },
        ],
      }];
    default:
      return EMPTY_ARRAY;
  }
};

const getPageSections = ({ selectedTabItemKey }) => [
  {
    className: styles.tabPaneSection,
    rows: [
      {
        columns: [PAGE_COMPONENT_KEYS.TAB_PANE],
      },
    ],
  },
  ...getMainBodySections(selectedTabItemKey),
];

const componentKeysToPickForSections = [PAGE_COMPONENT_KEYS.TAB_PANE];

export default () => createSelector(
  _map(componentKeysToPickForSections, defaultSelector),
  getPageSections,
);
