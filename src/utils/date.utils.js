import moment from 'moment';

export const getNow = () => moment();

export const getStartOfDay = () => getNow().startOf('day');

export const getStartOfMonth = () => getNow().startOf('month');

export const getStartOfYear = () => getNow().startOf('year');
