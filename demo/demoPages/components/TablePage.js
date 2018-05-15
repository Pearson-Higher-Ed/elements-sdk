import React from 'react';
import { Table,
         TableHead,
         TableRow,
         TableHeaderCell,
         TableBody,
         TableRowCell,
        Icon } from '../../../index';

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
      console.log(item);
      this.setState(prevState => ({
        itemSelected: item,
        direction: prevState.direction === 'up' ? 'down' : 'up'
      }));
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
            <li className="li-props">**The following props are only necessary on Selectable tables.**</li>
            <li className="li-props">inputId:String</li>
            <li className="li-props">The inputId is passed to the checkbox and its label. This can only start with letters or an underscore (applies to all id&#39;s).</li>
            <li className="li-props">inputLabel:String</li>
            <li className="li-props">Label for the corresponding checkbox.</li>
            <li className="li-props">containerId:String</li>
            <li className="li-props">Assigns the id to the {`<div>`} containing the checkbox.  This id must also be passed
              to the TableRowCell component and is <br/>referred to by the same prop name.
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
            <li className="li-props">inputId:String</li>
            <li className="li-props">The inputId is passed to the checkbox and its label</li>
            <li className="li-props">containerId:String</li>
            <li className="li-props">This must match what was passed into the TableHeaderCell component.  It is referenced here in the aria-labelledby of the checkbox.</li>
            <li className="li-props">labelledbyCellId:String</li>
            <li className="li-props">labelledbyCellId must match the cellId and is passed into the aria-labelledby of the checkbox.</li>
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
              <div style={twentyFour}>{`/>`}</div>
              <div style={twentyFour}>{`<TableHeaderCell columnSort={() => console.log('Hey')}>Comic</TableHeaderCell>`}</div>
              <div style={twentyFour}>{`<TableHeaderCell>Main characters</TableHeaderCell>`}</div>
              <div style={twentyFour}>{`<TableHeaderCell>Country</TableHeaderCell>`}</div>
            <div style={sixteen}>{`</TableRow>`}</div>
          <div style={eight}>{`</TableHead>`}</div>
          <div style={eight}>{`<TableBody>`}</div>
            <div style={sixteen}>{`<TableRow>`}</div>
              <div style={twentyFour}>{`<TableRowCell`}</div>
                <div style={thirtyTwo}>{`inputId="c1"`}</div>
                <div style={thirtyTwo}>{`containerId="comic_select"`}</div>
                <div style={thirtyTwo}>{`labelledbyCellId="sel_Spirou"`}</div>
              <div style={twentyFour}>{`/>`}</div>
              <div style={twentyFour}>{`<TableRowCell cellId="sel_Spirou">Spirou</TableRowCell>`}</div>
              <div style={twentyFour}>{`<TableRowCell>Spirou, Fantasio</TableRowCell>`}</div>
              <div style={twentyFour}>{`<TableRowCell>Belgium</TableRowCell>`}</div>
            <div style={sixteen}>{`</TableRow>`}</div>
            <div style={sixteen}>{`<TableRow>`}</div>
              <div style={twentyFour}>{`<TableRowCell`}</div>
                <div style={thirtyTwo}>{`inputId="c2"`}</div>
                <div style={thirtyTwo}>{`containerId="comic_select"`}</div>
                <div style={thirtyTwo}>{`labelledbyCellId="sel_sew"`}</div>
              <div style={twentyFour}>{`/>`}</div>
              <div style={twentyFour}>{`<TableRowCell cellId="sel_sew">Suske en Wiske</TableRowCell>`}</div>
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
              />
              <TableHeaderCell columnSort={this.handleColumnSort('comic')} iconName={this.getIconName('comic')} inputLabel="Comic"></TableHeaderCell>
              <TableHeaderCell columnSort={this.handleColumnSort('character')} iconName={this.getIconName('character')} inputLabel="Main characters"></TableHeaderCell>
              <TableHeaderCell columnSort={this.handleColumnSort('country')} iconName={this.getIconName('country')} inputLabel="Country"></TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableRowCell
                inputId="c1"
                containerId="comic_select"
                labelledbyCellId="sel_Spirou"
              />
              <TableRowCell cellId="sel_Spirou">Spirou</TableRowCell>
              <TableRowCell>Spirou, Fantasio</TableRowCell>
              <TableRowCell>Belgium</TableRowCell>
            </TableRow>
            <TableRow>
              <TableRowCell
                inputId="c2"
                containerId="comic_select"
                labelledbyCellId="sel_sew"
              />
              <TableRowCell cellId="sel_sew">Suske en Wiske</TableRowCell>
              <TableRowCell>Suske, Wiske, Tante Sidonia, Krimson</TableRowCell>
              <TableRowCell>Belgium</TableRowCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table selectable sortable>
          <TableHead>
            <TableRow>
              <TableHeaderCell
                inputId="comic_select_0"
                containerId="comic_select"
                inputLabel="Select"
              />
              <TableHeaderCell columnSort={this.handleColumnSort('comic')} iconName={this.getIconName('comic')} inputLabel="Comic"></TableHeaderCell>
              <TableHeaderCell columnSort={this.handleColumnSort('character')} iconName={this.getIconName('character')} inputLabel="Main characters"></TableHeaderCell>
              <TableHeaderCell columnSort={this.handleColumnSort('country')} iconName={this.getIconName('country')} inputLabel="Country"></TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableRowCell
                inputId="c1"
                containerId="comic_select"
                labelledbyCellId="sel_Spirou"
              />
              <TableRowCell cellId="sel_Spirou">Spirou</TableRowCell>
              <TableRowCell>Spirou, Fantasio</TableRowCell>
              <TableRowCell>Belgium</TableRowCell>
            </TableRow>
            <TableRow>
              <TableRowCell
                inputId="c2"
                containerId="comic_select"
                labelledbyCellId="sel_sew"
              />
              <TableRowCell cellId="sel_sew">Suske en Wiske</TableRowCell>
              <TableRowCell>Suske, Wiske, Tante Sidonia, Krimson</TableRowCell>
              <TableRowCell>Belgium</TableRowCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className="pe-checkbox">
            <input type="checkbox" id='yes' aria-labelledby='ohno' />
            <label htmlFor='yes'>wow</label>
            <span>
              <Icon name="check-sm-18" />
            </span>
        </div>
      </div>
    );
  }
}

export default TablePage;
