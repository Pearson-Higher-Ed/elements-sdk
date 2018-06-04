import React from 'react';
import { Table,
         TableHead,
         TableRow,
         TableHeaderCell,
         TableBody,
         TableRowCell } from '../../../index';

const eight = {paddingLeft: 8};
const sixteen = {paddingLeft: 16};
const twentyFour = {paddingLeft: 24};
const thirtyTwo = {paddingLeft: 32};

class TablePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      itemSelected: ''
    };
  }

  handleColumnSort = (item) => {
    return () => {
      if (this.state.itemSelected === item) {
        this.setState(prevState => ({
          direction: prevState.direction === 'up' ? 'down' : 'up'
        }));
      } else {
        this.setState({
          itemSelected: item, 
          direction: 'down'
        });
      }
    }
  }

  getIconName = (columnname) => {
    if (this.state.itemSelected === columnname) {
      return this.state.direction === 'up' ? 'sort-down-18' : 'sort-up-18';
    }

    return  'sortable-18';
  }

  render() {
    return (
      <div className="displaySection">
        <h2><a href="http://pearson-higher-ed.github.io/design/c/tables/" target="_blank">Table</a></h2>
        <div className="code">
          <h3>Table props</h3>
          <ul>
            <li className="li-props">children:Node</li>
            <li className="li-props">sortable:Boolean</li>
            <li className="li-props">Applies the appropriate styles to a sortable table. If you are using a sortable table, <br/>
              <i>TableHeaderCell</i> and <i>TableRowCell</i> must be self closing to get the pe-checkbox to render.
            </li>
            <li className="li-props">selectable:Boolean</li>
            <li className="li-props">Applies the appropriate styles to a selectable table.
              Both sortable and selectable can be used simultaneously.
            </li>
            <li className="li-props">insertCaption:Boolean</li>
            <li className="li-props">Inserts a {`<caption>`} element into the <i>Table</i>.</li>
            <li className="li-props">captionText:String</li>
            <li className="li-props">**Only needed if <i>insertCaption</i> is present**. Defaults to null.</li>
          </ul>
          <h3>TableBody props</h3>
          <ul>
            <li className="li-props">children:Node</li>
          </ul>
          <h3>TableHead props</h3>
          <ul>
            <li className="li-props">children:Node</li>
          </ul>
          <h3>TableHeaderCell props</h3>
          <ul>
            <li className="li-props">Not only does thead needs header cell, rows in tbody shall have row headers too. The cell holding the title text of each row should be a {`<th scope="row">`} row header. That's being said, if the first table cell in selectable table doesn't have a visible label, you could make the column 2 cells as the row headers.</li>
            <li className="li-props">children:Node</li>
            <li className="li-props">scope:String</li>
            <li className="li-props">Scope specifies whether the cell is a header
              for a column, row, or group of columns or rows.  Defaults to "col".
            </li>
            <li className="li-props">columnSort:Function</li>
            <li className="li-props">Applies the appropriate Icons to show the column is sortable and allows a sorting Function
              to be passed in on the data.  <br/>Toggles from 'ASC' to 'DESC'.
            </li>
            <li className="li-props">alignCell:String </li>
            <li className="li-props">Allows you to change the alignment of the contents of a cell.  Acceptable strings are 'center' and 'right'. <br/>
              By default the element will maintain its left alignment.
            </li>
            <li className="li-props">inputLabel:String</li>
            <li className="li-props">Label for the corresponding checkbox, or sortable button in column header.</li>
            <li className="li-props">**The following props are only necessary on Selectable tables.**</li>
            <li className="li-props"><ul>There are two ways that you could label a checkbox for accessibility purpose:
              <li className="li-props">1. Use the inputLabel to set up a visible label</li>
              <li className="li-props">2. Use the ariaLabel to set up the aria-label attribute for the checkbox</li>
            </ul></li>
            <li className="li-props">inputId:String</li>
            <li className="li-props">The inputId is passed to the checkbox and its label. This can only start with letters or an underscore (applies to all id&#39;s).</li>
            <li className="li-props">containerId:String</li>
            <li className="li-props">Assigns the id to the {`<div>`} containing the checkbox.  This id could also be passed
              to the TableRowCell component and is <br/>referred to by the same prop name.
            </li>
            <li className="li-props">ariaLabel:String</li>
            <li className="li-props">Set up the aria-label attribute for the checkbox.
            </li>
            <li className="li-props">defaultIcon:String - defaultIcon to show</li>
            <li className="li-props">iconName - control icon name yourself</li>
          </ul>
          <h3>TableRow props</h3>
          <ul>
            <li className="li-props">children:Node</li>
          </ul>
          <h3>TableRowCell props</h3>
          <ul>
            <li className="li-props">children:Node</li>
            <li className="li-props">**The following props are only necessary on Selectable tables.**</li>
            <li className="li-props"><ul>There are three ways that you could label a checkbox for accessibility purpose:
              <li className="li-props">1. Use the inputLabel to set up a visible label</li>
              <li className="li-props">2. Use the containerId and labelledbyCellId to set up the aria-labelledby attribute the checkbox</li>
              <li className="li-props">3. Use the ariaLabel to set up the aria-label attribute for the checkbox</li>
            </ul></li>
            <li className="li-props">inputId:String</li>
            <li className="li-props">The inputId is passed to the checkbox and its label</li>
            <li className="li-props">containerId:String</li>
            <li className="li-props">This must match what was passed into the TableHeaderCell component.  It is referenced here in the aria-labelledby of the checkbox.</li>
            <li className="li-props">labelledbyCellId:String</li>
            <li className="li-props">labelledbyCellId must match the cellId and is passed into the aria-labelledby of the checkbox.</li>
            <li className="li-props">ariaLabel:String</li>
            <li className="li-props">Set up the aria-label attribute for the checkbox.
            </li>
            <li className="li-props">cellId:String</li>
            <li className="li-props">cellId needs to be passed to the TableRowCell that follows the checkbox.</li>
          </ul>
        </div> <br/>

        <h3>Example usage</h3>

        <div className="code" style={{fontSize: 14}}>
        {`<Table selectable sortable>`} <br/>
          <div style={eight}>{`<TableHead>`}</div>
            <div style={sixteen}>{`<TableRow>`}</div>
              <div style={twentyFour}>{`<TableHeaderCell`}</div>
                <div style={thirtyTwo}>{`inputId="comic_select_0"`}</div>
                <div style={thirtyTwo}>{`containerId="comic_select"`}</div>
                <div style={thirtyTwo}>{`inputLabel="Select"`}</div>
                <div style={thirtyTwo}>{`scope="col"`}</div>
              <div style={twentyFour}>{`/>`}</div>
              <div style={twentyFour}>{`<TableHeaderCell columnSort={this.handleColumnSort('comic')} iconName={this.getIconName('comic')} inputLabel='Comic'/>`}</div>
              <div style={twentyFour}>{`<TableHeaderCell columnSort={this.handleColumnSort('characters')} iconName={this.getIconName('characters')} inputLabel='Main characters'/>`}</div>
              <div style={twentyFour}>{`<TableHeaderCell columnSort={this.handleColumnSort('country')} iconName={this.getIconName('country')} inputLabel='Country'/>`}</div>
            <div style={sixteen}>{`</TableRow>`}</div>
          <div style={eight}>{`</TableHead>`}</div>
          <div style={eight}>{`<TableBody>`}</div>
            <div style={sixteen}>{`<TableRow>`}</div>
              <div style={twentyFour}>{`<TableRowCell`}</div>
                <div style={thirtyTwo}>{`inputId="c1"`}</div>
                <div style={thirtyTwo}>{`containerId="comic_select"`}</div>
                <div style={thirtyTwo}>{`ariaLabel="Select Row 1"`}</div>
              <div style={twentyFour}>{`/>`}</div>
              <div style={twentyFour}>{`<TableHeaderCell scope="row">Spirou</TableHeaderCell>`}</div>
              <div style={twentyFour}>{`<TableRowCell>Spirou, Fantasio</TableRowCell>`}</div>
              <div style={twentyFour}>{`<TableRowCell>Belgium</TableRowCell>`}</div>
            <div style={sixteen}>{`</TableRow>`}</div>
            <div style={sixteen}>{`<TableRow>`}</div>
              <div style={twentyFour}>{`<TableRowCell`}</div>
                <div style={thirtyTwo}>{`inputId="c2"`}</div>
                <div style={thirtyTwo}>{`containerId="comic_select"`}</div>
                <div style={thirtyTwo}>{`labelledbyCellId="sel_sew"`}</div>
              <div style={twentyFour}>{`/>`}</div>
              <div style={twentyFour}>{`<TableHeaderCell cellId="sel_sew" scope="row">Suske en Wiske</TableHeaderCell>`}</div>
              <div style={twentyFour}>{`<TableRowCell>Suske, Wiske, Tante Sidonia, Krimson</TableRowCell>`}</div>
              <div style={twentyFour}>{`<TableRowCell>Belgium</TableRowCell>`}</div>
            <div style={sixteen}>{`</TableRow>`}</div>
          <div style={eight}>{`</TableBody>`}</div>
        {`</Table>`}
        </div><br/>

        <div> {this.state.itemSelected.length ? 'Sorting by ' + this.state.itemSelected : ''} </div>
        <Table selectable sortable>
          <TableHead>
            <TableRow>
              <TableHeaderCell
                inputId="comic_select_0"
                containerId="comic_select" 
                inputLabel="Select"           
                scope="col"
              />
              <TableHeaderCell columnSort={this.handleColumnSort('comic')} iconName={this.getIconName('comic')} inputLabel='Comic'/>
              <TableHeaderCell columnSort={this.handleColumnSort('characters')} iconName={this.getIconName('characters')} inputLabel='Main characters'/>
              <TableHeaderCell columnSort={this.handleColumnSort('country')} iconName={this.getIconName('country')} inputLabel='Country'/>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableRowCell
                inputId="c1"
                ariaLabel="Select Row 1"
              />
              <TableHeaderCell scope="row">Spirou</TableHeaderCell>
              <TableRowCell>Spirou, Fantasio</TableRowCell>
              <TableRowCell>Belgium</TableRowCell>
            </TableRow>
            <TableRow>
              <TableRowCell
                inputId="c2"
                containerId="comic_select"
                labelledbyCellId="sel_sew"
              />
              <TableHeaderCell cellId="sel_sew" scope="row">Suske en Wiske</TableHeaderCell>
              <TableRowCell>Suske, Wiske, Tante Sidonia, Krimson</TableRowCell>
              <TableRowCell>Belgium</TableRowCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default TablePage;
