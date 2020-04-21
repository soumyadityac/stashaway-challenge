import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import PageBuilder from 'organisms/PageBuilder';
import withActions from 'utils/connectors/withActions';
import { EMPTY_OBJECT } from 'utils/constants/app.constants';

import pageSections from './stashAway.pageSections';
import pageConfig from './stashAway.pageConfig';

class StashAway extends PureComponent {
  render() {
    const { componentProps } = this.props;
    return (
      <PageBuilder
        title="General investing"
        goBackTo={{ label: 'Overview', href: '#' }}
        sections={pageSections}
        config={pageConfig}
        componentProps={componentProps}
      />
    );
  }
}

StashAway.propTypes = {
  componentProps: PropTypes.object,
};

StashAway.defaultProps = {
  componentProps: EMPTY_OBJECT,
};

export default withActions()(StashAway);
