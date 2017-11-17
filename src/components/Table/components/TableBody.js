import React, { Component } from 'react';
import PropTypes from 'prop-types';

const TableBody = ({ children }) => {
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
