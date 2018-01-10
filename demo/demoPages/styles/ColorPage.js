import React from 'react';
import colors from './utils/colors';


const ColorPage = () => {

  const sallyForth = (items, item) => {
    items.push(<div className="color-page-div"><div
                    style={{backgroundColor: item.hex}}>
                 <p className="color-page-white-text">{item.name}</p>
                 <p className="color-page-dark-text">{item.name}</p>
               </div><p>{item.hex}</p></div>);
  };
  const primaryColors = () => {
    let items = [];
    let item;

    for (let i = 0; i < colors.primary.length; i++) {
      item = colors.primary[i];
      sallyForth(items, item);
    }
    return items;
  };

  const secondaryColors = () => {
    let items = [];
    let item;

    for (let i = 0; i < colors.secondary.length; i++) {
      item = colors.secondary[i];
      sallyForth(items, item);
    }
    return items;
  };

  const neutralColors = () => {
    let items = [];
    let item;

    for (let i = 0; i < colors.neutral.length; i++) {
      item = colors.neutral[i];
      sallyForth(items, item);
    }
    return items;
  };

  const conditionalColors = () => {
    let items = [];
    let item;

    for (let i = 0; i < colors.conditional.length; i++) {
      item = colors.conditional[i];
      sallyForth(items, item);
    }
    return items;
  };

  return (
    <div style={{padding: 14}}>
      <h1><a href="http://pearson-higher-ed.github.io/design/c/colors/">Color</a></h1>

      <h2>Entire Palette</h2>
      <p>The background color of each swatch is the hex code that will be used.</p>
      <p>Text is in both black and white to show you the un-adjusted contrast for each.</p>
      <p>You should not have to use these directly, but in the event you do, use `$pe-color-[color-name]` for example<br/>`$pe-color-digital-pearson-blue`.</p>

      <h3>Primary Palette</h3>
      {primaryColors()}

      <h3>Secondary Palette</h3>
      {secondaryColors()}

      <h3>Neutral Palette</h3>
      {neutralColors()}

      <h3>Conditional Palette</h3>
      {conditionalColors()}

      <h2>Accessible combinations</h2>
      <p>When looking at colors for text, the color contrast minimum between the text color and the background color is 4.5:1 for WCAG level-AA and 7:1 for WCAG level-AAA. Only some of the above colors can be combined while meeting this minimum:</p>
      <h3>White</h3>
      <ul>
        <li>ink-blue (AAA)</li>
        <li>charcoal(AAA)</li>
        <li>digital-pearson-blue (AA)</li>
        <li>medium-gray (AA)</li>
        <li>strawberry-red (AA)</li>
        <li>digital-grass-green (AA)</li>
        <li>hot-pink (AA)</li>
      </ul>
      <h3>White gray</h3>
      <ul>
        <li>ink-blue (AAA)</li>
        <li>charcoal (AAA)</li>
        <li>pearson-digital-blue (AA)</li>
        <li>medium-gray (AA)</li>
        <li>strawberry-red (AA)</li>
        <li>digital-grass-green (AA)</li>
        <li>hot-pink (AA)</li>
      </ul>
      <h3>Charcoal</h3>
      <ul>
        <li>white (AAA)</li>
        <li>white-gray (AAA)</li>
        <li>sunshine-yellow (AAA)</li>
        <li>sunflower-yellow (AAA)</li>
        <li>digital-ice-blue (AAA)</li>
        <li>concrete (AAA)</li>
        <li>alto (AAA)</li>
        <li>moonlight (AAA)</li>
        <li>digital-marine-turquoise (AA)</li>
      </ul>
      <h3>Ink blue</h3>
      <ul>
        <li>white (AAA)</li>
        <li>white-gray (AAA)</li>
        <li>digital-ice-blue (AA)</li>
        <li>alto (AA)</li>
        <li>concrete (AA)</li>
        <li>moonlight (AA)</li>
      </ul>
      <h3>Pearson digital blue</h3>
      <ul>
        <li>white (AA)</li>
        <li>white-gray (AA)</li>
      </ul>
      <h3>Sunshine yellow</h3>
      <ul>
        <li>charcoal (AAA)</li>
        <li>ink-blue (AA)</li>
      </ul>
      <h3>Digital ice blue</h3>
      <ul>
        <li>charcoal (AAA)</li>
        <li>ink-blue (AA)</li>
      </ul>
      <h3>Medium gray</h3>
      <ul>
        <li>white (AA)</li>
        <li>white-gray (AA)</li>
      </ul>
      <h3>Alto</h3>
      <ul>
        <li>charcoal (AAA)</li>
        <li>ink-blue (AA)</li>
      </ul>
      <h3>Concrete</h3>
      <ul>
        <li>charcoal (AAA)</li>
        <li>ink-blue (AA)</li>
      </ul>
      <h3>Moonlight</h3>
      <ul>
        <li>charcoal (AAA)</li>
        <li>ink-blue (AA)</li>
      </ul>
      <h3>Strawberry red</h3>
      <ul>
        <li>white (AA)</li>
        <li>white-gray (AA)</li>
      </ul>
      <h3>Digital grass green</h3>
      <ul>
        <li>white (AA)</li>
        <li>white-gray (AA)</li>
      </ul>
      <h3>Hot pink</h3>
      <ul>
        <li>white (AA)</li>
        <li>white-gray (AA)</li>
      </ul>
      <h3>Sunflower yellow</h3>
      <ul>
        <li>charcoal (AAA)</li>
      </ul>
      <h3>Digital marine turquoise</h3>
      <ul>
        <li>charcoal (AA)</li>
      </ul>
    </div>
  );
};

export default ColorPage;
