import SectionTitle from 'molecules/PageComponents/SectionTitle';
import TabPane from 'molecules/PageComponents/TabPane';
import BenchmarkSelector from 'molecules/PageComponents/BenchmarkSelector';
import DateTimeChart from 'molecules/PageComponents/DateTimeChart';
import DateRangeSelector from 'molecules/PageComponents/DateRangeSelector';

import {
  PAGE_COMPONENT_KEYS, TAB_PANE_ITEMS_LIST, BENCHMARK_COMPARE_FROM, BENCHMARK_COMPARE_WITH_OPTIONS, TAB_PANE_ADDITIONAL_ACTIONS, CHART_CONFIG_OPTIONS,
} from './stashAway.constants';

const config = {
  [PAGE_COMPONENT_KEYS.TAB_PANE]: {
    renderer: TabPane,
    renderOptions: {
      tabItems: TAB_PANE_ITEMS_LIST,
      moreActions: TAB_PANE_ADDITIONAL_ACTIONS,
    },
  },
  [PAGE_COMPONENT_KEYS.SECTION_TITLE]: {
    renderer: SectionTitle,
    renderOptions: {
      title: 'Portfolio benchmark',
    },
  },
  [PAGE_COMPONENT_KEYS.BENCHMARK_SELECTOR]: {
    renderer: BenchmarkSelector,
    renderOptions: {
      compareFrom: BENCHMARK_COMPARE_FROM,
      compareWithOptions: BENCHMARK_COMPARE_WITH_OPTIONS,
    },
  },
  [PAGE_COMPONENT_KEYS.RANGE_SELECTOR]: {
    renderer: DateRangeSelector,
  },
  [PAGE_COMPONENT_KEYS.CHART]: {
    renderer: DateTimeChart,
    renderOptions: {
      type: 'line',
      options: CHART_CONFIG_OPTIONS,
    },
  },
};

export default config;
