import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';

import './Tabs.scss';

export default class Tabs extends Component {

  static propTypes = {
    selected: PropTypes.number,
    children: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.element
    ]).isRequired,
    light: PropTypes.bool
  }

  static defaultProps = {
    selected: 0,
    light: false
  }

  constructor(props) {
    super(props)

    this.state = {
      selected: this.props.selected,
      tabId: '',
      panelId: ''
    }
  };

  getChildContext() {
    return { tabid: this.state.tabId.concat('', this.state.selected),
             panelid: this.state.panelId.concat('', this.state.selected) };
  }

  handleClick(i, event) {
    if (this.props.callback !== undefined) {
      this.props.callback(i);
    }

    this.setState({
      selected: i
    });
  }

  componentDidMount() {
    const parentUl = this.doc;
    const tabArray = parentUl.querySelectorAll('[role=tab]');
    const lastTabArray = tabArray.length - 1;

    parentUl.addEventListener("keydown", (event) => {
      const selectedIndex = this.state.selected;
      if (selectedIndex === 0 && event.keyCode === 37) {
        tabArray[lastTabArray].focus();
        this.setState({ selected: lastTabArray });
      }
      if (selectedIndex === lastTabArray && event.keyCode === 39) {
        tabArray[0].focus();
        this.setState({ selected: 0 });
      }
      if (selectedIndex !== 0 && event.keyCode === 37) {
        tabArray[selectedIndex - 1].focus();
        this.setState({ selected: selectedIndex - 1 });
      }
      if (selectedIndex !== lastTabArray && event.keyCode === 39) {
        tabArray[selectedIndex + 1].focus();
        this.setState({ selected: selectedIndex + 1 });
      }
    }, true)

  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      selected: nextProps.selected
    });
  }

  renderLabels() {
    function labels(child, i) {
      let activeClass = this.state.selected === i ? 'activeTab' : '';
      let tabI = activeClass ? null : '-1';
      let ariaSelected = activeClass ? true : false;
      const themeCheck = this.props.light ? 'light' : '';

      return (
        <button onFocus={() => this.setState({ tabId: num+`_${uuid.v1()}`,  panelId: num+`_${uuid.v4()}`})}
          className={`pe-tabs--btn ${themeCheck} ${activeClass}`} 
          id={this.state.tabId+i} 
          role="tab"
          tabIndex={tabI}
          aria-controls={this.state.panelId+i} 
          aria-selected={ariaSelected}
          onClick={this.handleClick.bind(this, i)}
          >{child.props.label}  
        </button>
      );
    }
    return (
      <div className="pe-tabs" role="tablist" ref={(div) => { this.doc = div; }} onFocus={() => this.setState({ tabId: `_${uuid.v1()}`,  panelId: `_${uuid.v4()}`})}>
        {this.props.children.map(labels.bind(this))}
      </div>
    );
  }

  renderContent() {
    return (
      <div>
        {this.props.children[this.state.selected]}
      </div>
    );
  }

  render() {

    return (
      <div>
        {this.renderLabels()}
        {this.renderContent()}
      </div>
    )
  };
};

Tabs.childContextTypes = {
  tabid: PropTypes.string,
  panelid: PropTypes.string
}
