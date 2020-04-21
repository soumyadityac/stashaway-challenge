import YahooFinanceService from 'services/yahooFinance.service';

import { getSanitizedHistoryData } from './stashAway.helpers';

export const fetchBenchmarkData = (symbol, dateRange) => YahooFinanceService.getHistory(symbol).then(getSanitizedHistoryData(dateRange));
