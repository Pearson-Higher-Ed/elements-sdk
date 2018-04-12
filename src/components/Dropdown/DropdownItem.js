import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon'

export default class DropdownItem extends Component {
  static propTypes = {
    label: PropTypes.string,
    selectValue: PropTypes.string,
    type: PropTypes.string,
    selected: PropTypes.bool,
    selectedName: PropTypes.string,
    checkmark: PropTypes.bool,
    onClick: PropTypes.func,
    dropdownId: PropTypes.string,
    imgUrl: PropTypes.string,
    imgHeight: PropTypes.string,
    imgWidth: PropTypes.string,
    imgAlt: PropTypes.string
  };
  constructor(props) {
  	super(props);
  	this.state = {
  		selected: false
  	};
  	this.toggleChecked = this.toggleChecked.bind(this);
  }
  
  toggleChecked (e) {
  	this.setState({selected: true})
  }
 
  render() {
    const { url, label, selectValue, type, selected, selectedName, checkmark, onClick, dropdownId, imgUrl, imgHeight, imgWidth, imgAlt } = this.props;
	
    switch (type) {
      case 'divider':
        return (
          <li className="divider-container" role="separator" data-item="divider">
            <hr className="dropdown-divider" />
          </li>
        );
        break;
      case 'link':
        return (
          <li role="presentation" data-item={label} ref={node => this.node = node}>
            <a href={url} className={checkmark ? 'checkmark' : ''} role="menuitem" tabIndex="-1">{label}</a>
          </li>
        );
        break;
      case 'button':
        return (
          <li role="presentation" data-item={label} data-value={selectValue}>
            <button role="menuitem" className={checkmark ? 'checkmark' : ''} onClick={onClick} type="button" tabIndex="-1">
              {checkmark ?
                  <span style={{visibility: selected ? 'visible' : 'hidden'}}>
                    <Icon name="check-sm-18">{selectedName}</Icon>
                  </span> : null
              }

              <span className={checkmark ? 'icon-padding' : ''}>
                {label}
              </span>
            </button>
          </li>
        );
        break;
        case 'imageButton':
          return (
            <li role="presentation" data-item={label} data-value={selectValue} id={dropdownId + "-" + selectValue}>
              <button role="menuitem" className={checkmark ? 'checkmark' : ''} onClick={onClick} type="button" tabIndex="-1">
              {checkmark ?
                  <span style={{visibility: selected ? 'visible' : 'hidden'}}>
                    <Icon name="check-sm-18">{selectedName}</Icon>
                  </span> : null
              }

              <span className={checkmark ? 'icon-padding' : ''}>
                <img src={imgUrl} height={imgHeight} width={imgWidth} alt={imgAlt} />
                &nbsp;{label}
              </span>
            </button>
            </li>
          );
        break;
      default:
        return <li id="itemTypeNotRecognized">DropdownItem "type" prop not recognized...</li>
        break;
    }
  }
};

DropdownItem.propTypes = {
  type: PropTypes.string.isRequired
};

DropdownItem.defaultProps = {
  type: "link",
}
