import _reduce from 'lodash/reduce';

export const getSanitizedHistoryData = (dateRange) => (historyData) => _reduce(historyData, (acc, { date, high }) => {
  const dateInMillis = date * 1000;
  if (dateRange && (dateInMillis < dateRange[0] || dateInMillis > dateRange[1])) return acc;
  return [...acc, [dateInMillis, high]];
}, []);
