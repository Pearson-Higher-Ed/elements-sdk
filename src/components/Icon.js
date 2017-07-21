import React     from 'react';
import PropTypes from 'prop-types';
import uuid      from 'uuid';


const Icon = (props) => {

  const { name, children } = props;

  const i_id = (children) ? '_'+uuid.v1() : null;

  return(
      <svg focusable       = "false"
           role            = {children ? "img" : null}
           aria-hidden     = {children ? false : true}
           aria-labelledby = {i_id}
           className       = {`pe-icon--${name}`}
           >
           {children && <title id={i_id}>{children}</title>}
        <use xlinkHref={'#' + name}></use>
      </svg>
    );
};


export default Icon;


Icon.propTypes = {
  name     : PropTypes.string.isRequired,
  children : PropTypes.string
};
