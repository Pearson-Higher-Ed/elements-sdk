import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon'

const DropdownItem = ({
  url,
  label,
  selectValue,
  type,
  selected,
  selectedName,
  checkmark,
  onClick,
  dropdownId,
  imgUrl,
  imgHeight,
  imgWidth,
  imgAlt,
  itemSelected,
  disabled
}) => {

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
          <li role="presentation" data-item={label} key={`${dropdownId}${selectValue}`} id={dropdownId + "-" + selectValue}>
            <a href={url} className={checkmark ? 'checkmark' : ''} role="menuitem" tabIndex="-1">{label}</a>
          </li>
        );
        break;
      case 'button':
        return (
          <li role="presentation"
				    data-item={label}
				    data-value={selectValue}
				    id={dropdownId + "-" + selectValue}
				    aria-checked={itemSelected === selectValue}
			      className={itemSelected === selectValue ? 'active' : ''}
            key={dropdownId + selectValue}
			    >
            <button role="menuitem"
              disabled={disabled}
              type="button"
              onClick={onClick}
				      className={checkmark ? 'checkmark' : ''}
				      tabIndex="-1"
            >
				      {checkmark ?
					      <span className="icon" style={{visibility: itemSelected === selectValue || selected ? 'visible' : 'hidden'}}>
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
            <li role="presentation"
              data-item={label}
				      data-value={selectValue}
				      id={dropdownId + "-" + selectValue}
				      aria-checked={itemSelected === selectValue}
				      className={itemSelected === selectValue ? 'active' : ''}
              key={dropdownId + selectValue}
			      >
				      <button role="menuitem"
                disabled={disabled}
                type="button"
					      className={checkmark ? 'checkmark' : ''}
					      tabIndex="-1"
                onClick={onClick}
              >
						    {checkmark ?
							    <span className="icon" style={{visibility: itemSelected === selectValue || selected ? 'visible' : 'hidden'}}>
								    <Icon name="check-sm-18">{selectedName}</Icon>
							    </span> : null
						    }
						    <span className={checkmark ? 'icon-padding' : ''}>
                  <img src={imgUrl}
								    height={imgHeight}
								    width={imgWidth}
								    alt={selectValue}/>
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
};

export default DropdownItem;

DropdownItem.propTypes = {
  label: PropTypes.string,
  selectValue: PropTypes.string,
  type: PropTypes.oneOf(['link', 'button', 'icon', 'image', 'divider', 'imageButton']),
  itemSelected: PropTypes.string,
  selected: PropTypes.bool,
  selectedName: PropTypes.string,
  checkmark: PropTypes.bool,
  onClick: PropTypes.func,
  dropdownId: PropTypes.string,
  imgUrl: PropTypes.string,
  imgHeight: PropTypes.string,
  imgWidth: PropTypes.string,
  imgAlt: PropTypes.string,
  disabled: PropTypes.bool
}

DropdownItem.defaultProps = {
  type: "link",
  disabled: false
}
