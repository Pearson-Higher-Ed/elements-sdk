import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { Table, TableHead } from '../index';

describe('Table', () => {

  describe('Table tests', function () {
    it('should render the Table', function() {
      const wrapper = shallow(<Table />);
      expect(wrapper.getElement().type).toEqual('table');
    });

    it('should render children', function() {
      const childWrapper = shallow(<Table><TableHead /></Table>);
      expect(childWrapper.getElement().props.children[1].type).toEqual(TableHead);
    });
  });
});
