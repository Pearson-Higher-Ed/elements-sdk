import React from 'react';
import PropTypes from 'prop-types';

const TableRow = (props) => {
  const { children } = props;

  const selectedRow = () => {
    const tables = document.querySelectorAll('.pe-table--selectable');
    for (let i=0; i<tables.length; i++) {
      let table = tables[i];
      let tbody = table.getElementsByTagName('tbody')[0];
      let trs = [].slice.call(tbody.getElementsByTagName('TR'));

      trs.forEach((tr) => {
        let input = tr.getElementsByTagName('INPUT')[0];
        if (input && input.type === 'checkbox') {
          if (input.checked) {
            tr.classList.add('selected');
           } else {
            tr.classList.remove('selected');
          }
        }
      });
    }
}

  return (
    <tr onClick={selectedRow}>
      {children}
    </tr>
  )
}

export default TableRow;

TableRow.propTypes = {
  children: PropTypes.node
}
