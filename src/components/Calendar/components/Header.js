import React from 'react';
import Icon from '../../Icon';

const Header = ({onPrev, onNext, month, year, monthNames, contrast}) => {
  const colorSwap = contrast ? 'inverse-header' :'';

  return (
    <div className="pe-cal-header pe-title--small">
      <div className={`pe-cal-title ${colorSwap}`} id="pe-cal-month">
         {monthNames[month]}
         {' '+ year}
      </div>
      <button className="pe-arrowIcons pe-icon--btn"
              onClick={onPrev.bind(this)}
              type="button"
              aria-label="Prev month"
      >
        <span>
          <Icon name="chevron-back-18" />
        </span>
      </button>
      <button className="pe-arrowIcons pe-icon--btn"
              onClick={onNext.bind(this)}
              type="button"
              aria-label="Next month"
      >
        <span>
          <Icon name="chevron-next-18" />
        </span>
      </button>
    </div>
  );
};

export default Header;
