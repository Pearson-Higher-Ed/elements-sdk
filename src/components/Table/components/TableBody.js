import React, { Component } from 'react';
import PropTypes from 'prop-types';

const TableBody = (props) => {
  const { children } = props;

  return (
    <tbody>
      {children}
    </tbody>
  )
}

export default TableBody;

TableBody.propTypes = {
  children: PropTypes.node
}
