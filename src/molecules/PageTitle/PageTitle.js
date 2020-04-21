import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Icon, { faArrowLeft } from 'atoms/Icon';
import { EMPTY_OBJECT, EMPTY_STRING } from 'utils/constants/app.constants';

import styles from './pageTitle.css';

class PageTitle extends PureComponent {
  renderGoBack = () => {
    const { goBackTo: { label } } = this.props;
    return (
      <button>
        <Icon icon={faArrowLeft} color="#02b1aa" />
        <span>{label}</span>
      </button>
    );
  }

  renderTitle = () => {
    const { title } = this.props;
    return (
      <h1>{title}</h1>
    );
  }

  render() {
    return (
      <div className={styles.pageTitleContainer}>
        {this.renderGoBack()}
        {this.renderTitle()}
      </div>
    );
  }
}

PageTitle.propTypes = {
  goBackTo: PropTypes.object,
  title: PropTypes.string,
};

PageTitle.defaultProps = {
  goBackTo: EMPTY_OBJECT,
  title: EMPTY_STRING,
};

export default PageTitle;
