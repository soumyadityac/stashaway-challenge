import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactApexChart from 'react-apexcharts';

import _pick from 'lodash/pick';

const CHART_VALID_PROPS = ['className', 'options', 'series'];

class Chart extends PureComponent {
  render() {
    const {
      type, height, ...restProps
    } = this.props;
    return (
      <ReactApexChart
        type={type}
        height={height}
        {..._pick(restProps, CHART_VALID_PROPS)}
      />
    );
  }
}

Chart.propTypes = {
  type: PropTypes.string, // TODO: oneOf
  height: PropTypes.number,
};

Chart.defaultProps = {
  type: 'area',
  height: 450,
};

export default Chart;
