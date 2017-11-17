import React from 'react';

const eight = {paddingLeft: 8};
const sixteen = {paddingLeft: 16};
const twentyFour = {paddingLeft: 24};

const StylesTablesPage = () => (
  <div style={{padding:14}}>
    <h1><a href="http://pearson-higher-ed.github.io/design/c/tables/">Tables</a></h1>

    <p>Use tables to display tabular data. For simply laying things out in a visual grid form, use CSS instead (and ensure any focusables follow visual tab order if you do).</p>
    <p>Tables should have either a heading above them, or a caption element, giving them their name/basic description.</p>

    <h2>Basic Tables</h2>
    <p>All tables will have:</p>
    <ul>
      <li>some kind of name such as a caption or heading (may not always be visible)</li>
      <li>a &lt;thead&gt; element with table headers</li>
      <li>column and (possible) row headers are &lt;th&gt; elements and have a <code className="code">scope</code> attribute</li>
    </ul>

    <h3>Captions and toolbars</h3>

    <p>Any captions or toolbars, above or below tables, have a distance of 28px from the table. To ensure this, use the following class names:</p>

    <p>If you&#39;re using an actual table <code className="code">&lt;caption&gt;</code> tag in our `pe-table` table, the caption will be on top and already have the correct distance. For bottom captions, give the table the class `pe-caption--bottom` and its caption will do the right thing.</p>

    <p>For actual separate elements (such as a heading tag instead of a caption tag, or a toolbar meant as table filtering controls), those elements need to be directly before or after the table in the code and use either class: `pe-table-toolbar` or `pe-table-caption`.</p>

    <table className="pe-table">
      <caption>Presidential Superheroes</caption>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Superpower(s)</th>
          <th scope="col">Battle Cry</th>
          <th scope="col">Team</th>
          <th scope="col">Nemesis</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Franklin Pierce</th>
          <td>Dashing Good Looks, Waffler Extraordinaire</td>
          <td>"I shall Pierce my enemies!"</td>
          <td>Alcoholics Anonymous</td>
          <td>The Grim Reaper, Bum Knee</td>
        </tr>
        <tr>
          <th scope="row">Ulysses S Grant</th>
          <td>Drinking, Fighting</td>
          <td>"Unconditional Surrender!"</td>
          <td>Alcoholics Anonymous</td>
          <td>Alcohol</td>
        </tr>
        <tr>
          <th scope="row">Theodore Roosevelt</th>
          <td>Will of Steel, Friend to All the Animals</td>
          <td>"Bully!"</td>
          <td>Rough Riders</td>
          <td>Corporations, Trusts, Monopolies</td>
        </tr>
        <tr>
          <th scope="row">William Howard Taft</th>
          <td>Immense mass</td>
          <td>"TAFT SMASH!"</td>
          <td>Skull and Bones</td>
          <td>Bathtubs</td>
        </tr>
      </tbody>
    </table>

  <div className="code">
    {`<table class="pe-table">`} <br/>
      <div style={eight}>{`<caption>Presidential Superheroes</caption>`}</div>
      <div style={eight}>{`<thead>`}</div>
        <div style={sixteen}>{`<tr>`}</div>
          <div style={twentyFour}>{`<th scope="col">Name</th>`}</div>
          <div style={twentyFour}>{`<th scope="col">Superpower(s)</th>`}</div>
          <div style={twentyFour}>{`<th scope="col">Battle Cry</th>`}</div>
          <div style={twentyFour}>{`<th scope="col">Team</th>`}</div>
          <div style={twentyFour}>{`<th scope="col">Nemesis</th>`}</div>
        <div style={sixteen}>{`</tr>`}</div>
      <div style={eight}>{`</thead>`}</div>
      <div style={eight}>{`<tbody>`}</div>
        <div style={sixteen}>{`<tr>`}</div>
          <div style={twentyFour}>{`<th scope="row">Franklin Pierce</th>`}</div>
          <div style={twentyFour}>{`<td>Dashing Good Looks, Waffler Extraordinaire</td>`}</div>
          <div style={twentyFour}>{`<td>"I shall Pierce my enemies!"</td>`}</div>
          <div style={twentyFour}>{`<td>Alcoholics Anonymous</td>`}</div>
          <div style={twentyFour}>{`<td>The Grim Reaper, Bum Knee</td>`}</div>
        <div style={sixteen}>{`</tr>`}</div>
        <div style={sixteen}>{`<tr>`}</div>
          <div style={twentyFour}>{`<th scope="row">Ulysses S Grant</th>`}</div>
          <div style={twentyFour}>{`<td>Drinking, Fighting</td>`}</div>
          <div style={twentyFour}>{`<td>"Unconditional Surrender!"</td>`}</div>
          <div style={twentyFour}>{`<td>Alcoholics Anonymous</td>`}</div>
          <div style={twentyFour}>{`<td>Alcohol</td>`}</div>
        <div style={sixteen}>{`</tr>`}</div>
        <div style={sixteen}>{`<tr>`}</div>
          <div style={twentyFour}>{`<th scope="row">Theodore Roosevelt</th>`}</div>
          <div style={twentyFour}>{`<td>Will of Steel, Friend to All the Animals</td>`}</div>
          <div style={twentyFour}>{`<td>"Bully!"</td>`}</div>
          <div style={twentyFour}>{`<td>Rough Riders</td>`}</div>
          <div style={twentyFour}>{`<td>Corporations, Trusts, Monopolies</td>`}</div>
        <div style={sixteen}>{`</tr>`}</div>
        <div style={sixteen}>{`<tr>`}</div>
          <div style={twentyFour}>{`<th scope="row">William Howard Taft</th>`}</div>
          <div style={twentyFour}>{`<td>Immense mass</td>`}</div>
          <div style={twentyFour}>{`<td>"TAFT SMASH!"</td>`}</div>
          <div style={twentyFour}>{`<td>Skull and Bones</td>`}</div>
          <div style={twentyFour}>{`<td>Bathtubs</td>`}</div>
        <div style={sixteen}>{`</tr>`}</div>
      <div style={eight}>{`</tbody>`}</div>
      {`</table>`}
    </div>

    <h2>Alignments</h2>

    <p>You can change the alignments of the data. Here the caption is at the bottom of the table and aligned left. The Team column is centered. The value column is right-aligned.</p>

    <p>Left align class name (default, this is only needed to override): `pe-table__left`
       Right align class name: `pe-table__right` Center align class name: `pe-table__center`
    </p>

    <table className="pe-table pe-caption--bottom">
      <caption className="pe-table__left">Supervillains of Propaganda</caption>
      <thead>
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Country</th>
          <th scope="col" className="pe-table__center">Team</th>
          <th scope="col" className="pe-table__right">Net Worth (in bazillions)</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">(Keith) Rupert Murdoch</th>
          <td>Australia</td>
          <td className="pe-table__center">Foxxxy Foxes</td>
          <td className="pe-table__right">13</td>
        </tr>
        <tr>
          <th scope="row">William Randall Hearst</th>
          <td>United States</td>
          <td className="pe-table__center">Yellow Journalists </td>
          <td className="pe-table__right">30</td>
        </tr>
        <tr>
          <th scope="row">Mark Zuckerberg</th>
          <td>United States</td>
          <td className="pe-table__center">SpyFace</td>
          <td className="pe-table__right">62</td>
        </tr>
        <tr>
          <th scope="row">Mao Zedong</th>
          <td>China</td>
          <td className="pe-table__center">LAMAO</td>
          <td className="pe-table__right">0</td>
        </tr>
      </tbody>
    </table>

    <div className="code">
    {`<table class="pe-table pe-caption--bottom">`}
        <div style={eight}>{`<caption class="pe-table__left">Supervillains of Propaganda</caption>`}</div>
        <div style={eight}>{`<thead>`}</div>
          <div style={sixteen}>{`<tr>`}</div>
            <div style={twentyFour}>{`<th scope="col">Name</th>`}</div>
            <div style={twentyFour}>{`<th scope="col">Country</th>`}</div>
            <div style={twentyFour}>{`<th scope="col" class="pe-table__center">Team</th>`}</div>
            <div style={twentyFour}>{`<th scope="col" class="pe-table__right">Net Worth (in bazillions)</th>`}</div>
          <div style={sixteen}>{`</tr>`}</div>
        <div style={eight}>{`</thead>`}</div>
        <div style={eight}>{`<tbody>`}</div>
          <div style={sixteen}>{`<tr>`}</div>
            <div style={twentyFour}>{`<th scope="row">(Keith) Rupert Murdoch</th>`}</div>
            <div style={twentyFour}>{`<td>Australia</td>`}</div>
            <div style={twentyFour}>{`<td class="pe-table__center">Foxxxy Foxes</td>`}</div>
            <div style={twentyFour}>{`<td class="pe-table__right">13</td>`}</div>
          <div style={sixteen}>{`</tr>`}</div>
          <div style={sixteen}>{`<tr>`}</div>
            <div style={twentyFour}>{`<th scope="row">William Randall Hearst</th>`}</div>
            <div style={twentyFour}>{`<td>United States</td>`}</div>
            <div style={twentyFour}>{`<td class="pe-table__center">Yellow Journalists </td>`}</div>
            <div style={twentyFour}>{`<td class="pe-table__right">30</td>`}</div>
          <div style={sixteen}>{`</tr>`}</div>
          <div style={sixteen}>{`<tr>`}</div>
            <div style={twentyFour}>{`<th scope="row">Mark Zuckerberg</th>`}</div>
            <div style={twentyFour}>{`<td>United States</td>`}</div>
            <div style={twentyFour}>{`<td class="pe-table__center">SpyFace</td>`}</div>
            <div style={twentyFour}>{`<td class="pe-table__right">62</td>`}</div>
          <div style={sixteen}>{`</tr>`}</div>
          <div style={sixteen}>{`<tr>`}</div>
            <div style={twentyFour}>{`<th scope="row">Mao Zedong</th>`}</div>
            <div style={twentyFour}>{`<td>China</td>`}</div>
            <div style={twentyFour}>{`<td class="pe-table__center">LAMAO</td>`}</div>
            <div style={twentyFour}>{`<td class="pe-table__right">0</td>`}</div>
          <div style={sixteen}>{`</tr>`}</div>
        <div style={eight}>{`</tbody>`}</div>
      {`</table>`}
    </div>

    <h2>Selectable rows</h2>

    <p>Selectable-row tables require Javascript for full styling.  See the React version of tables for this functionality.</p>

    <h2>Sortable columns</h2>

    <p>Tables with sortable columns will have controls for sorting in the table headers, represented by the sorting icons. These tables also require JavaScript to do anything. The React table is able to accept outside sorting functionality.</p>


  </div>
)

export default StylesTablesPage;
