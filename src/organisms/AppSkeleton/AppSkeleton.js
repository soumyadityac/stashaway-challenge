import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import AppHeader from 'molecules/AppHeader';
import { EMPTY_OBJECT } from 'utils/constants/app.constants';

class AppSkeleton extends PureComponent {
  render() {
    const { bodyContainer: Body, bodyProps } = this.props;
    return (
      <>
        <AppHeader />
        <Body {...bodyProps} />
      </>
    );
  }
}

AppSkeleton.propTypes = {
  bodyContainer: PropTypes.elementType.isRequired,
  bodyProps: PropTypes.object,
};

AppSkeleton.defaultProps = {
  bodyProps: EMPTY_OBJECT,
};

export default AppSkeleton;
