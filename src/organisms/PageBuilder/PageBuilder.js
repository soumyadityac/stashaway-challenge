
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import _map from 'lodash/map';
import _noop from 'lodash/noop';

import PageTitle from 'molecules/PageTitle';
import { EMPTY_OBJECT, EMPTY_ARRAY } from 'utils/constants/app.constants';
import ACTION_TYPES from 'utils/constants/state.actionTypes';

import styles from './pageBuilder.css';

class PageBuilder extends PureComponent {
  componentDidMount() {
    const { onAction } = this.props;
    onAction({ type: ACTION_TYPES.PAGE.PAGE_INIT });
  }

  renderColumn = (key) => {
    const { config, componentProps, onAction } = this.props;
    if (!config[key]) throw new Error(`Config missing for ${key}`);
    const { renderer: Component, renderOptions } = config[key];
    const componentPropForKey = componentProps[key] || EMPTY_OBJECT;
    return (
      <React.Fragment key={key}>
        <Component onAction={onAction} pageComponentKey={key} {...renderOptions} {...componentPropForKey} />
      </React.Fragment>
    );
  }

  renderRow = ({ className, columns }, index) => (
    <div key={index} className={cx(styles.rowContainer, className)}>
      {_map(columns, this.renderColumn)}
    </div>
  )

  renderPage = () => {
    const { sections } = this.props;
    return _map(sections, ({ name, rows, className }) => (
      <div key={name} className={cx(styles.sectionContainer, className)}>
        {_map(rows, this.renderRow)}
      </div>
    ));
  }

  render() {
    const { title, goBackTo } = this.props;
    return (
      <div className={styles.pageBuilderContainer}>
        <PageTitle goBackTo={goBackTo} title={title} />
        {this.renderPage()}
      </div>
    );
  }
}

PageBuilder.propTypes = {
  title: PropTypes.string,
  goBackTo: PropTypes.object,
  sections: PropTypes.array,
  config: PropTypes.object,
  componentProps: PropTypes.object,
  onAction: PropTypes.func,
};

PageBuilder.defaultProps = {
  title: null,
  goBackTo: EMPTY_OBJECT,
  sections: EMPTY_ARRAY,
  config: EMPTY_OBJECT,
  componentProps: EMPTY_OBJECT,
  onAction: _noop,
};

export default PageBuilder;
