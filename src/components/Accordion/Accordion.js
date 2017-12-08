import React, { Component } from 'react';
import PropTypes            from 'prop-types';

import './Accordion.scss';


export default class Accordion extends Component {

    static propTypes = {
        title: PropTypes.node,
        children: PropTypes.node
    }

    constructor(props) {
        super(props);
        this.state = {
            openIcon: 'block',
            closeIcon: 'none',
            accordionContent: 'none'
          };
      }
      
      handleClick = () => {
        if (this.state.openIcon === 'none') {
            return (
                this.setState({
                    openIcon: 'block',
                    closeIcon: 'none',
                    accordionContent: 'none'
          }));
        }
        return (
            this.setState({
                openIcon: 'none',
                closeIcon: 'block',
                accordionContent: 'block'
          })
        );
      };
    
      render() {
        const { children, title } = this.props;
    
        return (    
                <div className="pe-accordion-container">
                    <div className="pe-accordion-head">
                        <div className="pe-accordion-icons">
                            <svg focusable="false" className="pe-icon--dropdown-open-18" role="img" aria-label style={{display: this.state.openIcon}}>
                                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#dropdown-open-18" />
                            </svg>
                            <svg focusable="false" className="pe-icon--dropdown-close-18" role="img" aria-label style={{display: this.state.closeIcon}}>
                                <use xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="#dropdown-close-18" />
                            </svg>
                        </div>
                        <div className="pe-accordion-title" onClick={this.handleClick}>
                            {title}
                        </div>
                    </div>
                    <div className="pe-accordion-content" style={{display: this.state.accordionContent}}>
                        {children}
                    </div>
                </div>
        );
    }
}