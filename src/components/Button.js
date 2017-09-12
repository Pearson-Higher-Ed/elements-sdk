import React     from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {

  const { btnType, btnSize, btnIcon, ...rest } = props;

  let classes = (!btnSize) ? `pe-btn` : `pe-btn-${btnSize}`;

  if (btnIcon) {
    classes = `pe-btn-icon`;
  }
  if (btnType) {
    classes = (!btnSize) ? `pe-btn-${btnType}` : `pe-btn-${btnType} pe-btn-${btnSize}`;
  }


  return <button className={classes} {...rest}>{props.children}</button>;

};


export default Button;


Button.propTypes = {
  btnType: PropTypes.string,
  btnSize: PropTypes.string,
  btnIcon: PropTypes.bool
};
