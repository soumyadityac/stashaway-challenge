import _get from 'lodash/get';

import { EMPTY_ARRAY } from 'utils/constants/app.constants';
import ACTION_TYPES from 'utils/constants/state.actionTypes';

import { PAGE_COMPONENT_KEYS, TAB_PANES, BENCHMARK_COMPARE_FROM } from './stashAway.constants';
import { fetchBenchmarkData } from './stashAway.actions';

const handlePageInit = (_, { setState }) => {
  // Setting the default selected tab
  setState({ isLoading: true });
  fetchBenchmarkData(BENCHMARK_COMPARE_FROM.value).then((benchmarkData) => {
    setState({
      isLoading: false,
      componentProps: {
        [PAGE_COMPONENT_KEYS.TAB_PANE]: { selectedTabItemKey: TAB_PANES.OVERVIEW },
        [PAGE_COMPONENT_KEYS.CHART]: { series: [{ name: BENCHMARK_COMPARE_FROM.name, data: benchmarkData }] },
      },
    });
  });
};

const handleTabItemClick = ({ payload: { tabItemKey } }, { getState, setState }) => {
  const { componentProps } = getState();
  setState({
    componentProps: {
      ...componentProps,
      [PAGE_COMPONENT_KEYS.TAB_PANE]: { selectedTabItemKey: tabItemKey },
    },
  });
};

const handleBenchmarkSelected = ({ payload: { selectedBenchmark } }, { getState, setState }) => {
  setState({ isLoading: true });
  Promise.all([fetchBenchmarkData(BENCHMARK_COMPARE_FROM.value), fetchBenchmarkData(selectedBenchmark.value)]).then(([baseData, benchmarkData]) => {
    setState({
      isLoading: false,
      componentProps: {
        ...getState().componentProps,
        [PAGE_COMPONENT_KEYS.BENCHMARK_SELECTOR]: { compareWithValue: selectedBenchmark },
        [PAGE_COMPONENT_KEYS.RANGE_SELECTOR]: null,
        [PAGE_COMPONENT_KEYS.CHART]: {
          series: [
            { name: BENCHMARK_COMPARE_FROM.name, data: baseData },
            { name: selectedBenchmark.label, data: benchmarkData },
          ],
        },
      },
    });
  });
};

const handleDateRangeSelected = ({ payload: { selectedDateRange, dateRange } }, { getState, setState }) => {
  const selectedBenchmark = _get(getState(), `componentProps[${PAGE_COMPONENT_KEYS.BENCHMARK_SELECTOR}].compareWithValue`);
  setState({ isLoading: true });
  const promiseArr = [fetchBenchmarkData(BENCHMARK_COMPARE_FROM.value, dateRange)];
  promiseArr.push(selectedBenchmark ? fetchBenchmarkData(selectedBenchmark.value, dateRange) : Promise.resolve(EMPTY_ARRAY));
  Promise.all(promiseArr).then(([baseData, benchmarkData]) => {
    const series = [{ name: BENCHMARK_COMPARE_FROM.name, data: baseData }];
    setState({
      isLoading: false,
      componentProps: {
        ...getState().componentProps,
        [PAGE_COMPONENT_KEYS.RANGE_SELECTOR]: { selectedDateRange },
        [PAGE_COMPONENT_KEYS.CHART]: {
          series: selectedBenchmark ? [...series, { name: selectedBenchmark.label, data: benchmarkData }] : series,
        },
      },
    });
  });
};

export default {
  [ACTION_TYPES.PAGE.PAGE_INIT]: handlePageInit,
  [ACTION_TYPES.TAB_PANE.TAB_ITEM_CLICK]: handleTabItemClick,
  [ACTION_TYPES.BENCHMARK_SELECTOR.COMPARE_WITH_SELECTED]: handleBenchmarkSelected,
  [ACTION_TYPES.DATE_RANGE_SELECTOR.SELECT_DATE]: handleDateRangeSelected,
};
