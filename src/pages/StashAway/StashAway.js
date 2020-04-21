import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import PageBuilder from 'organisms/PageBuilder';
import withActions from 'utils/connectors/withActions';
import { EMPTY_OBJECT } from 'utils/constants/app.constants';

import createSelectorForPageSections from './stashAway.pageSections';
import pageConfig from './stashAway.pageConfig';
import ACTION_HANDLERS from './stashAway.actionHandlers';

class StashAway extends PureComponent {
  getPageSections = createSelectorForPageSections();

  render() {
    const { componentProps, onAction } = this.props;
    return (
      <PageBuilder
        title="General investing"
        goBackTo={{ label: 'Overview', href: '#' }}
        sections={this.getPageSections(componentProps)}
        config={pageConfig}
        componentProps={componentProps}
        onAction={onAction}
      />
    );
  }
}

StashAway.propTypes = {
  componentProps: PropTypes.object,
  onAction: PropTypes.func.isRequired,
};

StashAway.defaultProps = {
  componentProps: EMPTY_OBJECT,
};

export default withActions(ACTION_HANDLERS)(StashAway);
