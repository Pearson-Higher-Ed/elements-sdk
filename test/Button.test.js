import React      from 'react';
import enzyme     from 'enzyme';
import { Button } from '../index';

const { shallow } = enzyme;

describe('Button', () => {

  describe('Basic Button Test', function() {
    const wrapper = shallow(<Button>Test Button</Button>);

    it('should render the Button as button element', function() {
      expect(wrapper.getElement(0).type).toEqual('button');
    });

    it('should have the correct default className', function() {
      expect(wrapper.hasClass('pe-btn')).toEqual(true);
    });
  });

  describe('Primary Button Test', function() {

    const wrapper = shallow(<Button btnType="primary">Test Button</Button>);

    it('should render the Button as button element', function() {
      expect(wrapper.getElement(0).type).toEqual('button');
    });

    it('should have the correct classNames', function() {
      expect(wrapper.hasClass('pe-btn__primary')).toEqual(true);
    });

    it('should render text correctly', function() {
      expect(wrapper.text()).toEqual('Test Button');
    })
  });

  describe('Disabled Button Test', function() {
    const wrapper = shallow(<Button disabled>Disabled Button</Button>);

    it('should render the Button as button element', function() {
      expect(wrapper.getElement(0).type).toEqual('button');
    });

    it('should have the correct classNames', function() {
      expect(wrapper.hasClass('pe-btn')).toEqual(true);
    });

    it('should render text correctly', function() {
      expect(wrapper.text()).toEqual('Disabled Button');
    });

    it('should have the disabled attribute', function() {
      expect(wrapper.prop('disabled')).toEqual(true);
    })
  });

  describe('Primary Disabled Button Test', function() {

    const wrapper = shallow(<Button btnType="primary" disabled>Disabled Primary Button</Button>);

    it('should render the Button as button element', function() {
      expect(wrapper.getElement(0).type).toEqual('button');
    });

    it('should have the correct classNames', function() {
      expect(wrapper.hasClass('pe-btn__primary')).toEqual(true);
    });

    it('should render text correctly', function() {
      expect(wrapper.text()).toEqual('Disabled Primary Button');
    });

    it('should have the disabled attribute', function() {
      expect(wrapper.prop('disabled')).toEqual(true);
    })
  });


  describe('Small Button Test', function() {

    const wrapper = shallow(<Button btnSize="small">Small Button</Button>);

    it('should render the Button as button element', function() {
      expect(wrapper.getElement(0).type).toEqual('button');
    });

    it('should have the correct classNames', function() {
      expect(wrapper.hasClass('pe-btn--btn_small')).toEqual(true);
    });

    it('should render text correctly', function() {
      expect(wrapper.text()).toEqual('Small Button');
    });
  });


  describe('Large Button Test', function() {
    const wrapper = shallow(<Button btnSize="large">Large Button</Button>);

    it('should render the Button as button element', function() {
      expect(wrapper.getElement(0).type).toEqual('button');
    });

    it('should have the correct classNames', function() {
      expect(wrapper.hasClass('pe-btn--btn_large')).toEqual(true);
    });

    it('should render text correctly', function() {
      expect(wrapper.text()).toEqual('Large Button');
    });
  });


  describe('Mixed Button Test - Primary Small', function() {

    const wrapper = shallow(<Button btnType="primary" btnSize="small">Primary Small Button</Button>);

    it('should render the Button as button element', function() {
      expect(wrapper.getElement(0).type).toEqual('button');
    });

    it('should have the correct classNames', function() {
      expect(wrapper.hasClass('pe-btn__primary--btn_small')).toEqual(true);
    });

    it('should render text correctly', function() {
      expect(wrapper.text()).toEqual('Primary Small Button');
    });
  });


});
