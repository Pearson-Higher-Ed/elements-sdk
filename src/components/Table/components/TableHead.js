import React, { Component } from 'react';
import PropTypes from 'prop-types';

const TableHead = ({ children }) => {
  return (
    <thead>
      {children}
    </thead>
  )
}

export default TableHead;

TableHead.propTypes = {
  children: PropTypes.node
}
