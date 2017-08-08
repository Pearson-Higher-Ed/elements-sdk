import ReactDOM         from 'react-dom';
import React            from 'react'
import  * as Components from '../index'


document.body.addEventListener('o.InitComponents', e => {
  ReactDOM.render(
    React.createElement(Components[e.detail.componentName], e.detail.props, e.detail.props.children)
    , document.getElementById(e.detail.elementId)
  );
});
