import React from 'react';

import _constant from 'lodash/constant';

import ReactSelect from 'react-select';

const customStyles = {
  indicatorSeparator: _constant({ display: null }),
  dropdownIndicator: (provided) => ({ ...provided, color: '#02b1aa', '&:hover': { color: '#02b1aa' } }),
  control: (base) => ({
    ...base,
    border: '0.04rem solid #ccc',
    boxShadow: 'none',
    '&:hover': { border: '0.04rem solid #02b1aa' },
  }),
};

const Select = (props) => (
  <ReactSelect styles={customStyles} {...props} />
);

export default Select;
