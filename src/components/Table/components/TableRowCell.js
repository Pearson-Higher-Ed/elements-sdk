import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../Icon';

const TableRowCell = (props, context) => {
  const { children, inputId, containerId, cellId, labelledbyCellId, alignCell } = props;
  const { selectable } = context;
  const columnAlignment = alignCell === 'center' ? ' pe-table__center'
                          : alignCell === 'right'
                          ? ' pe-table__right'
                          : '';

  return (
    <td id={cellId} className={`${columnAlignment}`}>
      { selectable && !children
        ? <div className="pe-checkbox">
            <input type="checkbox" id={inputId} aria-labelledby={`${containerId} ${labelledbyCellId}`} />
            <label htmlFor={inputId}> </label>
            <span>
              <Icon name="check-sm-18" />
            </span>
          </div>
        : children }
    </td>
  )
}

export default TableRowCell;

TableRowCell.propTypes = {
  children: PropTypes.node,
  inputId: PropTypes.string,
  containerId: PropTypes.string,
  cellId: PropTypes.string,
  labelledbyCellId: PropTypes.string,
  alignCell: PropTypes.oneOf(['center', 'right'])
}

TableRowCell.contextTypes = {
  selectable: PropTypes.bool
}
