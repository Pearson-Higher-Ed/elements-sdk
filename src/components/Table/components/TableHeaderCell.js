import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../../Icon';

export default class TableHeaderCell extends Component {

  static propTypes = {
    children: PropTypes.node,
    scope: PropTypes.string,
    inputId: PropTypes.string,
    containerId: PropTypes.string,
    inputLabel: PropTypes.string,
    ariaLabel: PropTypes.string,
    columnSort: PropTypes.func,
    alignCell: PropTypes.oneOf(['center', 'right']),
    defaultIcon: PropTypes.string
  }

  static defaultProps = {
    scope: 'col',
    inputLabel: ' '
  }

  constructor(props) {
    super(props)

    this.state = {
      iconName: this.props.defaultIcon
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
    const { children, inputId, containerId, inputLabel, ariaLabel, columnSort,
            alignCell, scope } = this.props;
    const { selectable, sortable } = this.context;
    const { iconName } = this.isControlled() ? this.props : this.state;
    const sortClass = sortable ? 'pe-table__sortable' :'';
    const columnAlignment = (alignCell === 'center' || alignCell === 'right')
                            ? ' pe-table__' + alignCell :'';
    const sortCheck = columnSort ? columnSort :null;
    const arialabel = ariaLabel
                  ? ariaLabel
                  : null;

    return (
      <th aria-sort={
            iconName === 'sort-up-18'
            ? 'ascending'
            : iconName === 'sort-down-18'
            ? 'descending'
            : iconName === 'sortable-18'
            ? 'none'
            : null}
          columnSort={sortCheck}
          className={`${sortClass}${columnAlignment}`}
          scope={scope}
      >
        {
          selectable && !columnSort && !children
            ? <div className="pe-checkbox"
                   id={containerId}
                   onClick={
                     scope === 'col'
                     ? this.selectAll
                     : null
                     }>
                <input type="checkbox" id={inputId} aria-label={arialabel}/>
                <label htmlFor={inputId}>{inputLabel}</label>
                <span>
                  <Icon name="check-sm-18" />
                </span>
              </div>
            : children
        }
        {
          columnSort && 
            <button type="button" title={
              iconName === 'sort-up-18'
              ? 'Sorted up'
              : iconName === 'sort-down-18'
              ? 'Sorted down'
              : 'Unsorted' } onClick={this.iconToggle}>
              {inputLabel}<Icon name={iconName} />
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
  const tables = [].slice.call(document.getElementsByClassName('pe-table--selectable'));

  tables.forEach((table) => {
    let thead = table.getElementsByTagName('thead')[0],
        tbody = table.getElementsByTagName('tbody')[0];
    let thInput = thead.getElementsByTagName('INPUT')[0],
        trs = [].slice.call(tbody.getElementsByTagName('TR'));
    let trInputs = trs.map(tr => tr.getElementsByTagName('INPUT')[0]);

    if (thInput && thInput.type === 'checkbox') {
        trInputs.forEach((input) => {
          input.checked = thInput.checked;
        });
    }   
  });
}
