import React       from 'react';
import expect      from 'expect';
import { shallow } from 'enzyme';
import { Button }  from '../index';

describe('Button', () => {

  describe('Basic Button Test', function() {
    beforeEach(function() {
      this.wrapper = shallow(<Button>Test Button</Button>);
    });

    it('should render the Button as button element', function() {
      expect(this.wrapper.getElement().type).toEqual('button');
    });

    it('should have the correct default className', function() {
      expect(this.wrapper.hasClass('pe-btn')).toExist();
    });
  });

  describe('Primary Button Test', function() {
    beforeEach(function() {
      this.wrapper = shallow(<Button btnType="primary">Test Button</Button>);
    });

    it('should render the Button as button element', function() {
      expect(this.wrapper.getElement().type).toEqual('button');
    });

    it('should have the correct classNames', function() {
      expect(this.wrapper.hasClass('pe-btn__primary')).toExist();
    });

    it('should render text correctly', function() {
      expect(this.wrapper.text()).toEqual('Test Button');
    })
  });

  describe('Disabled Button Test', function() {
    beforeEach(function() {
      this.wrapper = shallow(<Button disabled>Disabled Button</Button>);
    });

    it('should render the Button as button element', function() {
      expect(this.wrapper.getElement().type).toEqual('button');
    });

    it('should have the correct classNames', function() {
      expect(this.wrapper.hasClass('pe-btn')).toExist();
    });

    it('should render text correctly', function() {
      expect(this.wrapper.text()).toEqual('Disabled Button');
    });

    it('should have the disabled attribute', function() {
      expect(this.wrapper.prop('disabled')).toExist();
    })
  });

  describe('Primary Disabled Button Test', function() {
    beforeEach(function() {
      this.wrapper = shallow(<Button btnType="primary" disabled>Disabled Primary Button</Button>);
    });

    it('should render the Button as button element', function() {
      expect(this.wrapper.getElement().type).toEqual('button');
    });

    it('should have the correct classNames', function() {
      expect(this.wrapper.hasClass('pe-btn__primary')).toExist();
    });

    it('should render text correctly', function() {
      expect(this.wrapper.text()).toEqual('Disabled Primary Button');
    });

    it('should have the disabled attribute', function() {
      expect(this.wrapper.prop('disabled')).toExist();
    })
  });


  describe('Small Button Test', function() {
    beforeEach(function() {
      this.wrapper = shallow(<Button btnSize="small">Small Button</Button>);
    });

    it('should render the Button as button element', function() {
      expect(this.wrapper.getElement().type).toEqual('button');
    });

    it('should have the correct classNames', function() {
      expect(this.wrapper.hasClass('pe-btn--btn_small')).toExist();
    });

    it('should render text correctly', function() {
      expect(this.wrapper.text()).toEqual('Small Button');
    });
  });


  describe('Large Button Test', function() {
    beforeEach(function() {
      this.wrapper = shallow(<Button btnSize="large">Large Button</Button>);
    });

    it('should render the Button as button element', function() {
      expect(this.wrapper.getElement().type).toEqual('button');
    });

    it('should have the correct classNames', function() {
      expect(this.wrapper.hasClass('pe-btn--btn_large')).toExist();
    });

    it('should render text correctly', function() {
      expect(this.wrapper.text()).toEqual('Large Button');
    });
  });


  describe('Mixed Button Test - Primary Small', function() {
    beforeEach(function() {
      this.wrapper = shallow(<Button btnType="primary" btnSize="small">Primary Small Button</Button>);
    });

    it('should render the Button as button element', function() {
      expect(this.wrapper.getElement().type).toEqual('button');
    });

    it('should have the correct classNames', function() {
      expect(this.wrapper.hasClass('pe-btn__primary--btn_small')).toExist();
    });

    it('should render text correctly', function() {
      expect(this.wrapper.text()).toEqual('Primary Small Button');
    });
  });


});
