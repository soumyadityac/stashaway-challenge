import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Select from 'atoms/Select';

import { EMPTY_OBJECT, EMPTY_ARRAY, EMPTY_STRING } from 'utils/constants/app.constants';
import ACTION_TYPES from 'utils/constants/state.actionTypes';

import noop from 'lodash/noop';
import styles from './benchmarkSelector.css';


class BenchmarkSelector extends PureComponent {
  handleCompareWithSelect = (selectedBenchmark) => {
    const { onAction, pageComponentKey } = this.props;
    onAction({ type: ACTION_TYPES.BENCHMARK_SELECTOR.COMPARE_WITH_SELECTED, payload: { pageComponentKey, selectedBenchmark } });
  }

  renderCompareFrom = () => {
    const { compareFrom: { category, name } } = this.props;
    return (
      <div className={styles.compareFromContainer}>
        <span>{category}</span>
        <h3>{name}</h3>
      </div>
    );
  }

  renderCompareWith = () => {
    const { compareWithOptions, compareWithValue } = this.props;
    return (
      <div className={styles.compareWithContainer}>
        <Select placeholder="Which benchmark do you want to compare?" options={compareWithOptions} value={compareWithValue} onChange={this.handleCompareWithSelect} />
      </div>
    );
  }

  renderVs = () => (
    <span className={styles.vsConatainer}>VS</span>
  )

  render() {
    return (
      <div className={styles.mainContainer}>
        {this.renderCompareFrom()}
        {this.renderCompareWith()}
        {this.renderVs()}
      </div>
    );
  }
}

BenchmarkSelector.propTypes = {
  compareFrom: PropTypes.object,
  compareWithOptions: PropTypes.array,
  compareWithValue: PropTypes.any,
  onAction: PropTypes.func,
  pageComponentKey: PropTypes.string,
};

BenchmarkSelector.defaultProps = {
  compareFrom: EMPTY_OBJECT,
  compareWithOptions: EMPTY_ARRAY,
  compareWithValue: null,
  onAction: noop,
  pageComponentKey: EMPTY_STRING,
};

export default BenchmarkSelector;
