// import HTTP from './http';
import HTTP from './httpFake';

const historyCache = {};

const getHistory = (symbol) => ((historyCache[symbol]) ? Promise.resolve(historyCache[symbol]) : HTTP.get(`history/${symbol}/1d`).then(({ data }) => {
  const { items, error } = data;
  if (error) throw new Error('Error occured while fetching data');
  historyCache[symbol] = items;
  return historyCache[symbol];
}));

export default { getHistory };
