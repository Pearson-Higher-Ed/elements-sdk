import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from '../../../../index';

export default class TableHeaderCell extends Component {

  static propTypes = {
    children: PropTypes.node,
    scope: PropTypes.string,
    inputId: PropTypes.string,
    containerId: PropTypes.string,
    inputLabel: PropTypes.string,
    columnSort: PropTypes.func,
    alignCell: PropTypes.oneOf(['center', 'right']),
    defaultIcon: PropTypes.string
  }

  static defaultProps = {
    scope: 'col'
  }

  constructor(props) {
    super(props)

    this.state = {
      iconName: this.props.defaultIcon || 'sortable-18'
    }

    this.selectAll = _selectAll.bind(this);
  }

  isControlled() {
    return this.props.iconName != null
  }

  iconToggle = () => {
    const { iconName } = this.state;
    this.props.columnSort()

    if (iconName === 'sort-up-18') {
      return this.setState({ iconName: 'sort-down-18' })
    }

    return this.setState({ iconName: 'sort-up-18' });
  }

  render() {
    const { children, inputId, containerId, inputLabel, columnSort,
            alignCell } = this.props;
    const { selectable, sortable } = this.context;
    const { iconName } = this.isControlled() ? this.props : this.state;
    const sortClass = sortable ? 'pe-table__sortable' :'';
    const columnAlignment = (alignCell === 'center' || alignCell === 'right')
                            ? ' pe-table__' + alignCell :'';
    const sortCheck = columnSort ? columnSort :null;

    return (
      <th aria-sort={
            iconName === 'sort-up-18'
            ? 'ascending'
            : iconName === 'sort-down-18'
            ? 'descending'
            : null }
          columnSort={sortCheck}
          className={`${sortClass}${columnAlignment}`}
      >
        {
          selectable && !children
            ? <div className="pe-checkbox"
                   id={containerId}
                   onClick={this.selectAll}>
                <input type="checkbox" id={inputId} />
                <label htmlFor={inputId}>{inputLabel}</label>
                <span>
                  <Icon name="check-sm-18" />
                </span>
              </div>
            : children
        }
        {
          columnSort &&
            <button type="button" className="pe-icon--btn" onClick={this.iconToggle}>
              <Icon name={iconName} />
            </button>
        }
      </th>
    )
  }
}

TableHeaderCell.contextTypes = {
  selectable: PropTypes.bool,
  sortable: PropTypes.bool
}

function _selectAll() {
  const checkboxes = document.querySelectorAll('div.pe-checkbox input');
  for (let i = 1; i < checkboxes.length; i++) {
    checkboxes[i].checked = checkboxes[0].checked;
  }
}
