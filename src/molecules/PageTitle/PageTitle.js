import React, { PureComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

import styles from './pageTitle.css';

class PageTitle extends PureComponent {
  renderGoBack = () => {
    const { goBackTo: { label } } = this.props;
    return (
      <button>
        <FontAwesomeIcon icon={faArrowLeft} color="#02b1aa" />
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
    const { title, goBackTo: { href, label } } = this.props;
    return (
      <div className={styles.pageTitleContainer}>
        {this.renderGoBack()}
        {this.renderTitle()}
      </div>
    );
  }
}

export default PageTitle;
