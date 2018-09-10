import React from 'react';
import expect from 'expect';
import { mount, shallow } from 'enzyme';
import { jsdom } from 'jsdom';
import { Dropdown, DropdownItem } from '../index';
import { Button } from '../index';

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
    const document = jsdom('');
    Object.keys(document.defaultView).forEach((property) => {
      if (typeof global[property] === 'undefined') {
        global[property] = document.defaultView[property];
      }
    });

    it('selecting item should set dropdown state to closed', function () {

      const mounted = shallow(
      	<Dropdown label="test label" id="testId" type="text">
      		<DropdownItem checkmark selectValue="testitem1" dropdownId="test1" selectedName="selected" label="list item 1" type="button" />
      	</Dropdown>);
      const instance = mounted.instance();

     instance.toggleDropdown();
     mounted.find('li button').simulate('click');
     expect(instance.state.open).toEqual(false);
   });
  });

  describe('dropdown handleKeyDown', function() {
    const document = jsdom('');
    Object.keys(document.defaultView).forEach((property) => {
      if (typeof global[property] === 'undefined') {
        global[property] = document.defaultView[property];
      }
    });

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
          <DropdownItem selectedName="selected" selectValue="testlist1" label="list item 1" type="button" />
          <DropdownItem type="divider" />
          <DropdownItem label="list item 2" selectValue="testlist2" type="link" url="http://www.google.com" />
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
