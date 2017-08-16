import React, { Component } from 'react';
import { Link }             from 'react-router-dom';
import { Icon, Button }     from '../../index';


 class HeaderPage extends Component {

  constructor () {
    super();
    this.toggleList = _toggleList.bind(this);
  }

  render() {
    return  (
      <div className="container">
        <div className="header">
          <Link to="/"><h1 className="headerTitle">Pearson Design Accelerator</h1></Link>
          <Button btnSize="xlarge headerButton" onClick={this.toggleList}>
            Compounds
            <Icon name="dropdown-open-18" />
          </Button>
        </div>
        <ul className="buttonList">
          <li><Link className="link" to={`/`} >Home</Link></li>
          <li><Link className="link" to={`/styles-buttons`}>Styles Buttons</Link></li>
          <li><Link className="link" to={`/forms`}>Forms</Link></li>
          <li><Link className="link" to={`/styles-icons`}>Styles Icons</Link></li>
          <li><Link className="link" to={`/responsive-utils`}>Responsive Utilities</Link></li>
          <li><Link className="link" to={`/typography`}>Typography</Link></li>
          <li><Link className="link" to={`/styles-inputs`}>Styles Inputs</Link></li>
          <li><Link className="link" to={`/color`}>Color</Link></li>
          <li><Link className="link" to={`/buttons`} >Buttons</Link></li>
          <li><Link className="link" to={`/icons`} >Icons</Link></li>
          <li><Link className="link" to={`/inputs`} >Inputs</Link></li>
          <li><Link className="link" to={`/dropdown`} >Dropdown</Link></li>
          <li><Link className="link" to={`/footer`} >Footer</Link></li>
          <li><Link className="link" to={`/tabs`} >Tabs</Link></li>
          <li><Link className="link" to={`/loadingSpinner`} >Loading Spinner</Link></li>
          <li><Link className="link" to={`/staticAlert`} >Static Alert</Link></li>
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


export default HeaderPage;
