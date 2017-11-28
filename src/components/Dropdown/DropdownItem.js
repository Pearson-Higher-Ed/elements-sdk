import React, { Component } from 'react';
import ReactDOM from 'react-dom';
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
    imgUrl: PropTypes.string,
    imgHeight: PropTypes.string,
    imgWidth: PropTypes.string
  };

  componentDidMount() {
    if (this.props.selected) {
      console.log(this.node);
      this.node.scrollIntoView(true);
    }
  }

  render() {
    const { url, label, selectValue, type, selected, selectedName, checkmark, onClick, imgUrl, imgHeight, imgWidth } = this.props;

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
          <li role="presentation" data-item={label} data-value={selectValue} ref={node => this.node = node}>
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
            <li role="presentation" data-item={label} data-value={selectValue} ref={node => this.node = node}>
              <button role="menuitem" className={checkmark ? 'checkmark' : ''} onClick={onClick} type="button" tabIndex="-1">
              {checkmark ?
                  <span style={{visibility: selected ? 'visible' : 'hidden'}}>
                    <Icon name="check-sm-18">{selectedName}</Icon>
                  </span> : null
              }

              <span className={checkmark ? 'icon-padding' : ''}>
                <img src={imgUrl} height={imgHeight} width={imgWidth} />
                &nbsp;{label}
              </span>
            </button>
            </li>
          );
        break;
      default:
        break;
    }
  }
};

// const DropdownItem = ({ url, label, selectValue, type, selected, selectedName, checkmark, onClick, imgUrl, imgHeight, imgWidth }) => {
//   switch (type) {
//     case 'divider':
//       return (
//         <li className="divider-container" role="separator" data-item="divider">
//           <hr className="dropdown-divider" />
//         </li>
//       );
//       break;
//     case 'link':
//       return (
//         <li role="presentation" data-item={label}>
//           <a href={url} className={checkmark ? 'checkmark' : ''} role="menuitem" tabIndex="-1">{label}</a>
//         </li>
//       );
//       break;
//     case 'button':
//       return (
//         <li role="presentation" data-item={label} data-value={selectValue}>
//           <button role="menuitem" className={checkmark ? 'checkmark' : ''} onClick={onClick} type="button" tabIndex="-1">
//             {checkmark ?
//                 <span style={{visibility: selected ? 'visible' : 'hidden'}}>
//                   <Icon name="check-sm-18">{selectedName}</Icon>
//                 </span> : null
//             }
//
//             <span className={checkmark ? 'icon-padding' : ''}>
//               {label}
//             </span>
//           </button>
//         </li>
//       );
//       break;
//       case 'imageButton':
//         return (
//           <li role="presentation" data-item={label} data-value={selectValue}>
//             <button role="menuitem" className={checkmark ? 'checkmark' : ''} onClick={onClick} type="button" tabIndex="-1">
//             {checkmark ?
//                 <span style={{visibility: selected ? 'visible' : 'hidden'}}>
//                   <Icon name="check-sm-18">{selectedName}</Icon>
//                 </span> : null
//             }
//
//             <span className={checkmark ? 'icon-padding' : ''}>
//               <img src={imgUrl} height={imgHeight} width={imgWidth} />
//               &nbsp;{label}
//             </span>
//           </button>
//           </li>
//         );
//       break;
//     default:
//       break;
//   }
// };
