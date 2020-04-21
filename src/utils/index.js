import _get from 'lodash/get';

import { EMPTY_OBJECT } from './constants/app.constants';

export const defaultSelector = (selector) => (sourceObject) => _get(sourceObject, selector, EMPTY_OBJECT);
