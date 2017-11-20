import React, { Component } from 'react';
import { Link }             from 'react-router-dom';
import { Icon, Button }     from '../../index';


class HeaderPage extends Component {

  constructor () {
    super();
    this.toggleList = _toggleList.bind(this);
    this.toggleListTwo = _toggleListTwo.bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.clickListener);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.clickListener);
  }

  clickListener = (e) => {
    const currentElement = e.target;

    if (!this.header.contains(currentElement)) {
      document.querySelector('.buttonList').style.display = 'none';
      document.querySelector('.buttonListTwo').style.display = 'none';
    }
  }

  render() {
    return  (
      <div className="demo-container" ref={container => { this.container = container;}}>
        <div className="header" ref={head => { this.header = head; }}>
          <Link to="/"><h1 className="headerTitle">Pearson Design Accelerator</h1></Link>
          <Button btnSize="xlarge headerButton" btnType="primary" onClick={this.toggleList}>
            Styles
            <Icon name="dropdown-open-18" />
          </Button>
          <Button btnSize="xlarge headerButton" btnType="primary" onClick={this.toggleListTwo}>
            Components
            <Icon name="dropdown-open-18" />
          </Button>
        </div>
        <ul className="buttonList">
          <li><Link className="linkz" to={`/styles-buttons`}>Styles - Buttons</Link></li>
          <li><Link className="linkz" to={`/forms`}>Forms</Link></li>
          <li><Link className="linkz" to={`/styles-icons`}>Styles - Icons</Link></li>
          <li><Link className="linkz" to={`/responsive-utils`}>Responsive Utilities</Link></li>
          <li><Link className="linkz" to={`/typography`}>Typography</Link></li>
          <li><Link className="linkz" to={`/styles-inputs`}>Styles - Inputs</Link></li>
          <li><Link className="linkz" to={`/color`}>Color</Link></li>
          <li><Link className="linkz" to={`/styles-tables`}>Styles - Table</Link></li>
          <li><Link className="linkz" to={`/presentation-strategies`}>Presentation Strategies</Link></li>
          <li><Link className="linkz" to={`/grid`}>Grid</Link></li>
          <li><Link className="linkz" to={`/templates`}>Templates</Link></li>
          <li><Link className="linkz" to={`/bootstrap-grid`}>Bootstrap - Grid</Link></li>
        </ul>
        <ul className="buttonListTwo">
          <li><Link className="linkz" to={`/buttons`} >Buttons</Link></li>
          <li><Link className="linkz" to={`/icons`} >Icons</Link></li>
          <li><Link className="linkz" to={`/inputs`} >Inputs</Link></li>
          <li><Link className="linkz" to={`/dropdown`} >Dropdown</Link></li>
          <li><Link className="linkz" to={`/footer`} >Footer</Link></li>
          <li><Link className="linkz" to={`/tabs`} >Tabs</Link></li>
          <li><Link className="linkz" to={`/loadingSpinner`} >Loading Spinner</Link></li>
          <li><Link className="linkz" to={`/staticAlert`} >Static Alert</Link></li>
          <li><Link className="linkz" to={`/calendar`} >Calendar</Link></li>
          <li><Link className="linkz" to={`/table`} >Table</Link></li>
          <li><Link className="linkz" to={`/datePicker`} >Date Picker</Link></li>
          <li><Link className="linkz" to={`/timePicker`} >Time Picker</Link></li>
          <li><Link className="linkz" to={`/progress-bar`} >Progress Bar</Link></li>
          <li><Link className="linkz" to={`/phone-number`} >Phone Number</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}

const _toggleList = () => {
  let c = document.querySelector('.buttonList').style.display;
  c = (c !== 'initial') ? 'initial' : 'none';
  document.querySelector('.buttonList').style.display = c;
}

const _toggleListTwo = () => {
  let c = document.querySelector('.buttonListTwo').style.display;
  c = (c !== 'initial') ? 'initial' : 'none';
  document.querySelector('.buttonListTwo').style.display = c;
}


export default HeaderPage;
