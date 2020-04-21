import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import _map from 'lodash/map';

import { EMPTY_STRING, EMPTY_ARRAY } from 'utils/constants/app.constants';

import styles from './tabPane.css';

class TabPane extends PureComponent {
  renderTabItem = ({ label, key }) => {
    const { selectedTabItemKey } = this.props;
    return (
      <div className={cx(styles.tabItem, { [styles.selectedItem]: selectedTabItemKey === key })}>
        <span>{label}</span>
      </div>
    );
  }

  render() {
    const { tabItems, className } = this.props;
    return (
      <div className={cx(styles.tabPaneContainer, className)}>
        {_map(tabItems, this.renderTabItem)}
      </div>
    );
  }
}

TabPane.propTypes = {
  selectedTabItemKey: PropTypes.string,
  tabItems: PropTypes.array,
  className: PropTypes.string,
};

TabPane.defaultProps = {
  selectedTabItemKey: EMPTY_STRING,
  tabItems: EMPTY_ARRAY,
  className: EMPTY_STRING,
};

export default TabPane;
