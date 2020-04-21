import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon, { faChevronDown } from 'atoms/Icon';

import _map from 'lodash/map';
import _noop from 'lodash/noop';
import _isEmpty from 'lodash/isEmpty';

import { EMPTY_STRING, EMPTY_ARRAY } from 'utils/constants/app.constants';

import styles from './tabPane.css';
import ACTION_TYPES from '../../../utils/constants/state.actionTypes';

class TabPane extends PureComponent {
  handleTabItemClick = (key) => () => {
    const { pageComponentKey, onAction } = this.props;
    onAction({ type: ACTION_TYPES.TAB_PANE.TAB_ITEM_CLICK, payload: { pageComponentKey, tabItemKey: key } });
  }

  renderTabItem = ({ label, key }) => {
    const { selectedTabItemKey } = this.props;
    return (
      <button className={cx(styles.tabItem, { [styles.selectedItem]: selectedTabItemKey === key })} onClick={this.handleTabItemClick(key)}>
        <span>{label}</span>
      </button>
    );
  }

  renderRightSection = () => {
    const { moreActions } = this.props;
    if (_isEmpty(moreActions)) return null;
    return (
      <button className={cx(styles.tabItem, styles.tabRightItem)}>
        <span>More actions</span>
        <Icon icon={faChevronDown} size="sm" />
      </button>
    );
  }

  render() {
    const { tabItems, className } = this.props;
    return (
      <div className={cx(styles.tabPaneContainer, className)}>
        {_map(tabItems, this.renderTabItem)}
        {this.renderRightSection()}
      </div>
    );
  }
}

TabPane.propTypes = {
  selectedTabItemKey: PropTypes.string,
  tabItems: PropTypes.array,
  className: PropTypes.string,
  pageComponentKey: PropTypes.string,
  onAction: PropTypes.func,
  moreActions: PropTypes.array,
};

TabPane.defaultProps = {
  selectedTabItemKey: EMPTY_STRING,
  tabItems: EMPTY_ARRAY,
  className: EMPTY_STRING,
  pageComponentKey: EMPTY_STRING,
  onAction: _noop,
  moreActions: EMPTY_ARRAY,
};

export default TabPane;
