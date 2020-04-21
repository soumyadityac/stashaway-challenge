import { PAGE_COMPONENT_KEYS } from './stashAway.constants';

import styles from './stashAway.css';

const sections = [
  {
    className: styles.tabPaneSection,
    rows: [
      {
        columns: [PAGE_COMPONENT_KEYS.TAB_PANE],
      },
    ],
  },
  {
    rows: [
      {
        columns: [PAGE_COMPONENT_KEYS.SECTION_TITLE],
      },
      // {
      //   columns: [PAGE_COMPONENT_KEYS.BENCHMARK_SELECTOR],
      // },
      // {
      //   columns: [PAGE_COMPONENT_KEYS.RANGE_SELECTOR, PAGE_COMPONENT_KEYS.CURRENCY_SELECTOR],
      // },
      // {
      //   columns: [PAGE_COMPONENT_KEYS.CHART],
      // },
    ],
  },
];

export default sections;
