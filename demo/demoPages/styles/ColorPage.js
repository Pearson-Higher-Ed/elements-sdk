import React from 'react';
import colors from './utils/colors';


const ColorPage = () => {

  const primaryColors = () => {
    let items = [];
    let item;

    for (let i = 0; i < colors.primary.length; i++) {
      item = colors.primary[i];
      items.push(<div className="color-page-div"
                      style={{backgroundColor: item.hex}}>
                   <p className="color-page-white-text">{item.name}</p>
                   <p className="color-page-dark-text">{item.name}</p>
                 </div>);
    }
    return items;
  };

  const secondaryColors = () => {
    let items = [];
    let item;

    for (let i = 0; i < colors.secondary.length; i++) {
      item = colors.secondary[i];
      items.push(<div className="color-page-div"
                      style={{backgroundColor: item.hex}}>
                   <p className="color-page-white-text">{item.name}</p>
                   <p className="color-page-dark-text">{item.name}</p>
                 </div>);
    }
    return items;
  };

  const neutralColors = () => {
    let items = [];
    let item;

    for (let i = 0; i < colors.neutral.length; i++) {
      item = colors.neutral[i];
      items.push(<div className="color-page-div"
                      style={{backgroundColor: item.hex}}>
                   <p className="color-page-white-text">{item.name}</p>
                   <p className="color-page-dark-text">{item.name}</p>
                 </div>);
    }
    return items;
  };

  const conditionalColors = () => {
    let items = [];
    let item;

    for (let i = 0; i < colors.conditional.length; i++) {
      item = colors.conditional[i];
      items.push(<div className="color-page-div"
                      style={{backgroundColor: item.hex}}>
                   <p className="color-page-white-text">{item.name}</p>
                   <p className="color-page-dark-text">{item.name}</p>
                 </div>);
    }
    return items;
  };

  return (
    <div style={{padding: 14}}>
      <h1>Color</h1>

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

    </div>
  );
};

export default ColorPage;
