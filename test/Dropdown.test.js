import React from 'react';
import enzyme from 'enzyme';

import {
  Dropdown,
  DropdownItem,
  Button
} from '../index';

const { mount } = enzyme;

describe('Dropdown', () => {

  it('should create an anchor for text', function () {
    const dropDown = new Dropdown({label: 'test label', id: 'testId', type: 'text'});
    const anchor = dropDown.insertAnchor();

    expect(anchor.type).toEqual(Button);
    expect(anchor.props.className).toEqual('pe-icon--btn dropdown-activator');
  });

  it('should create an anchor for button', function () {
    const dropDown = new Dropdown({label: 'test label', id: 'testId', type: 'button'});
    const anchor = dropDown.insertAnchor();

    expect(anchor.type).toEqual(Button);
    expect(anchor.props.className).toEqual('pe-btn__primary dropdown-activator');
  });

  it('should create an anchor for icon', function () {
    const dropDown = new Dropdown({label: 'test label', id: 'testId', type: 'icon'});
    const anchor = dropDown.insertAnchor();

    expect(anchor.type).toEqual(Button);
    expect(anchor.props.className).toEqual('dropdown-activator pe-icon--btn');
  });

  it('should create an anchor for image', function () {
    const dropDown = new Dropdown({label: 'test label', id: 'testId', type: 'image'});
    const anchor = dropDown.insertAnchor();

    expect(anchor.type).toEqual(Button);
    expect(anchor.props.className).toEqual('pe-icon--btn dropdown-activator dropdown-image');
  });

  it('should create an anchor for unknown should render text', function () {
    const dropDown = new Dropdown({label: 'test label', id: 'testId', type: 'asdf'});
    const anchor = dropDown.insertAnchor();

    expect(anchor.type).toEqual(Button);
    expect(anchor.props.className).toEqual('pe-icon--btn dropdown-activator');
  });

  describe('dropdown changehandler', function() {

    it('should call changeHandler and set state to closed', function () {
      let selectedItem = null;
      const changeHandler = (item) => {
        selectedItem = item;
      };

      const mounted = mount(<Dropdown label="test label" id="testId" type="text" changeHandler={changeHandler} />);
      const instance = mounted.instance();
      const e = {
        target : {
          nodeName: 'LI',
          dataset : {
            item: 'option 1'
          }
        }
      };

      instance.itemSelected(e);
      expect(instance.state.open).toEqual(false);
      expect(instance.state.selectedItem).toEqual('option 1');
      expect(selectedItem.item).toEqual('option 1');
    });
  });

  describe('dropdown handleKeyDown', function() {

    it('should close dropdown if esc key is hit', function () {

      const mounted = mount(<Dropdown label="test label" id="testId" type="text" />);
      const instance = mounted.instance();

      const e = {
        which: 27
      };

      // set it to open
      instance.toggleDropdown();
      // force keydown call
      instance.handleKeyDown(e);

      expect(instance.state.open).toEqual(false);
    });

    it('should focus next item if keydown is hit and skip divider', function () {

      const mounted = mount(
        <Dropdown label="test label" id="testId" type="text" >
          <DropdownItem selectedName="selected" label="list item 1" type="button" />
          <DropdownItem type="divider" />
          <DropdownItem label="list item 2" type="link" url="http://www.google.com" />
          <DropdownItem label="list item 3" type="imageButton" imgUrl="https://lipis.github.io/flag-icon-css/flags/4x3/us.svg" />
        </Dropdown>
      );
      const instance = mounted.instance();

      const e = {
        which: 40,
        preventDefault: () =>{}
      };

      // set it to open
      instance.toggleDropdown();
      // force keydown call
      instance.handleKeyDown(e);

      expect(instance.state.open).toEqual(true);
      // this is a little confusing...but because the 0 item is going ot be the mobile header its going ot be 1
      expect(instance.focusedItem).toEqual(1);

      // skip divider
      instance.handleKeyDown(e);
      expect(instance.focusedItem).toEqual(3);
    });

    it('should focus previous item if up is hit and skip divider', function () {

      const mounted = mount(
        <Dropdown label="test label" id="testId" type="text" >
          <DropdownItem selectedName="selected" label="list item 1" type="button" />
          <DropdownItem type="divider" />
          <DropdownItem label="list item 2" type="link" url="http://www.google.com" />
        </Dropdown>
      );
      const instance = mounted.instance();

      const e = {
        which: 38,
        preventDefault: () =>{}
      };

      // set it to open
      instance.toggleDropdown();

      instance.focusedItem = 3;
      // force keydown call
      instance.handleKeyDown(e);

      expect(instance.state.open).toEqual(true);
      expect(instance.focusedItem).toEqual(1);
    });
  });
});
