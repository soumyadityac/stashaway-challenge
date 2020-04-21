import SectionTitle from 'molecules/PageComponents/SectionTitle';
import TabPane from 'molecules/PageComponents/TabPane';

import { PAGE_COMPONENT_KEYS, TAB_PANE_ITEMS_LIST } from './stashAway.constants';

const config = {
  [PAGE_COMPONENT_KEYS.TAB_PANE]: {
    renderer: TabPane,
    renderOptions: {
      tabItems: TAB_PANE_ITEMS_LIST,
    },
  },
  [PAGE_COMPONENT_KEYS.SECTION_TITLE]: {
    renderer: SectionTitle,
    renderOptions: {
      title: 'Portfolio benchmark',
    },
  },
};

export default config;
