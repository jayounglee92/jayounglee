import React from 'react';
import PropTypes from 'prop-types';

const Maybe = ({ test, children }) => {
  return <>{test ? children : null}</>;
};

Maybe.propTypes = {
  test: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
};

export default Maybe;
