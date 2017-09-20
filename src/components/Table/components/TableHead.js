import React, { Component } from 'react';
import PropTypes from 'prop-types';

const TableHead = (props) => {
  const { children } = props;

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
