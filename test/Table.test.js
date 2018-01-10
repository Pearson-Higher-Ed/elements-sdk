import React                from 'react';
import enzyme               from 'enzyme';
import { Table, TableHead } from '../index';

const { shallow } = enzyme;


describe('Table', () => {

  describe('Table tests', function () {
    it('should render the Table', function() {
      const wrapper = shallow(<Table />);
      expect(wrapper.getElement(0).type).toEqual('table');
    });

    it('should render children', function() {
      const childWrapper = shallow(<Table><TableHead /></Table>);
      expect(childWrapper.getElement(0).props.children[1].type).toEqual(TableHead);
    });
  });
});
