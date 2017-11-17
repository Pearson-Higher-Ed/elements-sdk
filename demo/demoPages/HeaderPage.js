import React, { Component } from 'react';
import { Link }             from 'react-router-dom';
import { Icon, Button }     from '../../index';


 class HeaderPage extends Component {

  constructor () {
    super();
    this.toggleList = _toggleList.bind(this);
    this.toggleListTwo = _toggleListTwo.bind(this);
  }

  render() {
    return  (
      <div className="demo-container">
        <div className="header">
          <Link to="/"><h1 className="headerTitle">Pearson Design Accelerator</h1></Link>
          <Button btnSize="xlarge headerButton" onClick={this.toggleList}>
            Styles
            <Icon name="dropdown-open-18" />
          </Button>
          <Button btnSize="xlarge headerButton" onClick={this.toggleListTwo}>
            Components
            <Icon name="dropdown-open-18" />
          </Button>
        </div>
        <ul className="buttonList">
          <li><Link className="link" to={`/styles-buttons`}>Styles - Buttons</Link></li>
          <li><Link className="link" to={`/forms`}>Forms</Link></li>
          <li><Link className="link" to={`/styles-icons`}>Styles - Icons</Link></li>
          <li><Link className="link" to={`/responsive-utils`}>Responsive Utilities</Link></li>
          <li><Link className="link" to={`/typography`}>Typography</Link></li>
          <li><Link className="link" to={`/styles-inputs`}>Styles - Inputs</Link></li>
          <li><Link className="link" to={`/color`}>Color</Link></li>
          <li><Link className="link" to={`/styles-tables`}>Styles - Table</Link></li>
          <li><Link className="link" to={`/presentation-strategies`}>Presentation Strategies</Link></li>
          <li><Link className="link" to={`/grid`}>Grid</Link></li>
          <li><Link className="link" to={`/templates`}>Templates</Link></li>
          <li><Link className="link" to={`/bootstrap-grid`}>Bootstrap - Grid</Link></li>
        </ul>
        <ul className="buttonListTwo">
          <li><Link className="link" to={`/buttons`} >Buttons</Link></li>
          <li><Link className="link" to={`/icons`} >Icons</Link></li>
          <li><Link className="link" to={`/inputs`} >Inputs</Link></li>
          <li><Link className="link" to={`/dropdown`} >Dropdown</Link></li>
          <li><Link className="link" to={`/footer`} >Footer</Link></li>
          <li><Link className="link" to={`/tabs`} >Tabs</Link></li>
          <li><Link className="link" to={`/loadingSpinner`} >Loading Spinner</Link></li>
          <li><Link className="link" to={`/staticAlert`} >Static Alert</Link></li>
          <li><Link className="link" to={`/calendar`} >Calendar</Link></li>
          <li><Link className="link" to={`/table`} >Table</Link></li>
          <li><Link className="link" to={`/datePicker`} >Date Picker</Link></li>
          <li><Link className="link" to={`/timePicker`} >Time Picker</Link></li>
          <li><Link className="link" to={`/progress-bar`} >Progress Bar</Link></li>
          <li><Link className="link" to={`/phone-number`} >Phone Number</Link></li>
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
