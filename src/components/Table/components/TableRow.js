import React from 'react';
import PropTypes from 'prop-types';

const TableRow = ({ children }) => {

  const selectedRow = () => {
    const tables = [].slice.call(document.getElementsByClassName('pe-table--selectable'));

    tables.forEach((table) => {
      let thead = table.getElementsByTagName('thead')[0],
          tbody = table.getElementsByTagName('tbody')[0];
      let thInput = thead.getElementsByTagName('INPUT')[0],
          trs = [].slice.call(tbody.getElementsByTagName('TR'));
      let trInputs = trs.map(tr => tr.getElementsByTagName('INPUT')[0]);

      if(thInput && trInputs.every(checkInput)) {
        thInput.checked = true;
      }

      if(thInput && !trInputs.every(checkInput)){
        thInput.checked = false;
      }

      trs.forEach((tr) => {
        let input = tr.getElementsByTagName('INPUT')[0];
        if (checkInput(input)) {
            tr.classList.add('selected');
          } else {
            tr.classList.remove('selected');
          }
      });
    });

    function checkInput(input) {
      if (input && input.type === 'checkbox') {
          return input.checked;
      }
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
