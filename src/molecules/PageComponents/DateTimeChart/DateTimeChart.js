import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Chart from 'atoms/Chart';
import { EMPTY_OBJECT } from 'utils/constants/app.constants';

import { DEFAULT_CHART_OPTION } from './dateTimeChart.constants';

import styles from './dateTimeChart.css';

class DateTimeChart extends PureComponent {
  render() {
    const { options } = this.props;
    return (
      <Chart {...this.props} className={styles.container} options={{ ...DEFAULT_CHART_OPTION, ...options }} />
    );
  }
}

DateTimeChart.propTypes = {
  options: PropTypes.object,
};

DateTimeChart.defaultProps = {
  options: EMPTY_OBJECT,
};

export default DateTimeChart;
