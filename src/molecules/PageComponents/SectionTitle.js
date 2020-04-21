import React from 'react';
import PropTypes from 'prop-types';

import { EMPTY_STRING } from 'utils/constants/app.constants';

const SectionTitle = ({ title, className }) => (
  <h2 className={className}>
    {title}
  </h2>
);

SectionTitle.propTypes = {
  title: PropTypes.string,
  className: PropTypes.string,
};

SectionTitle.defaultProps = {
  title: EMPTY_STRING,
  className: EMPTY_STRING,
};

export default SectionTitle;
