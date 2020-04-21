import { getNow } from 'utils/date.utils';

export const PAGE_COMPONENT_KEYS = {
  TAB_PANE: 'tabPane',
  SECTION_TITLE: 'benchmarkSectionTitle',
  BENCHMARK_SELECTOR: 'benchmarkSelector',
  RANGE_SELECTOR: 'rangeSelector',
  CURRENCY_SELECTOR: 'currencySelector',
  CHART: 'chart',
};

export const TAB_PANES = {
  OVERVIEW: 'overview',
  ASSETS: 'assets',
  PROJECTION: 'projection',
  ABOUT: 'about',
};

export const TAB_PANE_ITEMS_LIST = [
  { label: 'Overview', key: TAB_PANES.OVERVIEW },
  { label: 'Assets', key: TAB_PANES.ASSETS },
  { label: 'Projection', key: TAB_PANES.PROJECTION },
  { label: 'About Portfolio', key: TAB_PANES.ABOUT },
];

export const TAB_PANE_ADDITIONAL_ACTIONS = ['Action 1'];

export const BENCHMARK_COMPARE_FROM = { category: 'General Investing', name: 'StashAway Risk Index 14%', value: 'SWTSX' };

export const BENCHMARK_COMPARE_WITH_OPTIONS = [
  { label: '60% stocks (VTSMX ETF)', value: 'VTSMX' },
  { label: '40% bonds (VBMFX ETF)', value: 'VBMFX' },
];

export const CHART_CONFIG_OPTIONS = {
  title: {
    text: 'Portfolio value based on gross returns',
    style: { fontSize: 18, fontWeight: 'bold' },
  },
  subtitle: {
    text: `Gross returns and exchange rates sourced from Yahoo Finance as on ${getNow().format('L')}`,
    style: { fontWeight: 'bold' },
  },
};
