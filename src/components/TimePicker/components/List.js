import React    from 'react';
import { Icon } from "../../../index";

import './List.scss';


export const List = (props) => {

    const { id, itemsToList, itemToParent, selectedItem, listRef, listEvents } = props;

    return (
      <ul id="itemlist" className="pe-itemList" ref={listRef} onKeyDown={listEvents} role="listbox" aria-expanded="true" aria-live="polite">
        {
          itemsToList.map((item,i) =>
            <li key           = {`${id}-item-${i}`}
                id            = {`${id}-item-${i}`}
                className     = "pe-itemList-item"
                role          = "option"
                tabIndex      = "-1"
                aria-selected = {item === selectedItem}
                onClick       = {itemToParent}
              >
              {selectedItem === item && <Icon name="check-sm-18" />}
              {item}
            </li>)
        }
      </ul>
    )
}
