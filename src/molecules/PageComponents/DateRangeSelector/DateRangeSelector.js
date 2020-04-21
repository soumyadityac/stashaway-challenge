import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import _map from 'lodash/map';
import _noop from 'lodash/noop';

import ACTION_TYPES from 'utils/constants/state.actionTypes';
import { EMPTY_STRING } from 'utils/constants/app.constants';

import { DATE_RANGES, DATE_RANGE_VS_LABEL } from './dateRangeSelector.constants';
import { DATE_RANGE_VS_RANGE_GETTER } from './dateRangeSelector.helpers';

import styles from './dateRangeSelector.css';

class DateRangeSelector extends PureComponent {
  handleDateRangeSelection = (range) => () => {
    const { onAction, pageComponentKey } = this.props;
    onAction({ type: ACTION_TYPES.DATE_RANGE_SELECTOR.SELECT_DATE, payload: { pageComponentKey, selectedDateRange: range, dateRange: DATE_RANGE_VS_RANGE_GETTER[range]() } });
  }

  renderRange = (range) => {
    const { selectedDateRange } = this.props;
    return (
      <button key={range} onClick={this.handleDateRangeSelection(range)} className={cx({ [styles.selected]: (selectedDateRange === range) })}>{DATE_RANGE_VS_LABEL[range]}</button>
    );
  }

  render() {
    const { className } = this.props;
    return (
      <div className={cx(styles.dateRangeContainer, className)}>
        {_map(DATE_RANGES, this.renderRange)}
      </div>
    );
  }
}

DateRangeSelector.propTypes = {
  onAction: PropTypes.func,
  pageComponentKey: PropTypes.string,
  className: PropTypes.string,
  selectedDateRange: PropTypes.string,
};

DateRangeSelector.defaultProps = {
  onAction: _noop,
  pageComponentKey: EMPTY_STRING,
  className: EMPTY_STRING,
  selectedDateRange: DATE_RANGES.MAX,
};

export default DateRangeSelector;
