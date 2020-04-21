import _constant from 'lodash/constant';

import { getStartOfDay, getStartOfMonth, getStartOfYear } from 'utils/date.utils';

import { DATE_RANGES } from './dateRangeSelector.constants';

export const DATE_RANGE_VS_RANGE_GETTER = {
  [DATE_RANGES.ONE_MONTH]: () => [getStartOfDay().subtract(1, 'months').valueOf(), getStartOfDay().valueOf()],
  [DATE_RANGES.SIX_MONTHS]: () => [getStartOfMonth().subtract(6, 'months').valueOf(), getStartOfDay().valueOf()],
  [DATE_RANGES.YTD]: () => [getStartOfYear().valueOf(), getStartOfDay().valueOf()],
  [DATE_RANGES.ONE_YEAR]: () => [getStartOfDay().subtract(1, 'year'), getStartOfDay().valueOf()],
  [DATE_RANGES.MAX]: _constant(null),
};
