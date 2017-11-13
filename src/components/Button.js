import React     from 'react';
import PropTypes from 'prop-types';

const Button = ({ btnType, btnSize, btnIcon, children, ...rest }) => {

  let classes = (!btnSize) ? `pe-btn` : `pe-btn--btn_${btnSize}`;

  if (btnIcon) {
    classes = `pe-icon--btn`;
  }
  if (btnType) {
    classes = (!btnSize) ? `pe-btn__${btnType}` : `pe-btn__${btnType}--btn_${btnSize}`;
  }

  return <button className={classes} {...rest}>{children}</button>;
};

export default Button;

Button.propTypes = {
  btnType: PropTypes.string,
  btnSize: PropTypes.string,
  btnIcon: PropTypes.bool
};
