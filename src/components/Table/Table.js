import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Table extends Component {

  static propTypes = {
    children: PropTypes.node,
    sortable: PropTypes.bool,
    selectable: PropTypes.bool,
    insertCaption: PropTypes.bool,
    captionText: PropTypes.string
  }

  static defaultProps = {
    sortable: false,
    selectable: false,
    insertCaption: false,
    captionText: null
  }

  getChildContext() {
    return {
      selectable: this.props.selectable,
      sortable: this.props.sortable
    };
  }

  render() {
    const { children, sortable, selectable, insertCaption, captionText } = this.props;
    const sortClass = sortable ? ' pe-table--active-headers' :'';
    const selectClass = selectable ? ' pe-table--selectable' :'';

    return (
      <table className={`pe-table${sortClass}${selectClass}`}>
        {
          insertCaption &&
            <caption>{captionText}</caption>
        }
        {children}
      </table>
    )
  }
}

Table.childContextTypes = {
  selectable: PropTypes.bool,
  sortable: PropTypes.bool
};
