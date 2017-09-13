import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    const {btnType, btnSize, btnIcon, ...rest} = props;
    let classes = [];

    if (btnIcon) {
        classes.push('pe-btn-icon');
    } else {
        classes.push('pe-btn');
    }

    if (btnType) {
        classes.push(`pe-btn-${btnType}`);
    }

    if (btnSize) {
        classes.push(`pe-btn-${btnSize}`);
    }

    return <button className={classes.join(' ')} {...rest}>{props.children}</button>;

};

export default Button;

Button.propTypes = {
    btnType: PropTypes.string,
    btnSize: PropTypes.string,
    btnIcon: PropTypes.bool
};
