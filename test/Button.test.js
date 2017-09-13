import React from 'react';
import expect from 'expect';
import {shallow} from 'enzyme';
import {Button} from '../index';

describe('Button', () => {
    let wrapper;

    describe('Basic Button Test', function () {
        beforeEach(function () {
            wrapper = shallow(<Button>Test Button</Button>);
        });

        it('should render the Button as button element', function () {
            expect(wrapper.node.type).toEqual('button');
        });

        it('should have the correct default className', function () {
            expect(wrapper.hasClass('pe-btn')).toExist();
        });
    });

    describe('Primary Button Test', function () {
        beforeEach(function () {
            wrapper = shallow(<Button btnType="primary">Test Button</Button>);
        });

        it('should render the Button as button element', function () {
            expect(wrapper.node.type).toEqual('button');
        });

        it('should have the correct classNames', function () {
            expect(wrapper.hasClass('pe-btn-primary')).toExist();
        });

        it('should render text correctly', function () {
            expect(wrapper.text()).toEqual('Test Button');
        })
    });

    describe('Disabled Button Test', function () {
        beforeEach(function () {
            wrapper = shallow(<Button disabled>Disabled Button</Button>);
        });

        it('should render the Button as button element', function () {
            expect(wrapper.node.type).toEqual('button');
        });

        it('should have the correct classNames', function () {
            expect(wrapper.hasClass('pe-btn')).toExist();
        });

        it('should render text correctly', function () {
            expect(wrapper.text()).toEqual('Disabled Button');
        });

        it('should have the disabled attribute', function () {
            expect(wrapper.prop('disabled')).toExist();
        })
    });

    describe('Primary Disabled Button Test', function () {
        beforeEach(function () {
            wrapper = shallow(<Button btnType="primary" disabled>Disabled Primary Button</Button>);
        });

        it('should render the Button as button element', function () {
            expect(wrapper.node.type).toEqual('button');
        });

        it('should have the correct classNames', function () {
            expect(wrapper.hasClass('pe-btn-primary')).toExist();
        });

        it('should render text correctly', function () {
            expect(wrapper.text()).toEqual('Disabled Primary Button');
        });

        it('should have the disabled attribute', function () {
            expect(wrapper.prop('disabled')).toExist();
        })
    });

    describe('Large Button Test', function () {
        beforeEach(function () {
            wrapper = shallow(<Button btnSize="lg">Large Button</Button>);
        });

        it('should render the Button as button element', function () {
            expect(wrapper.node.type).toEqual('button');
        });

        it('should have the correct classNames', function () {
            expect(wrapper.hasClass('pe-btn')).toExist();
            expect(wrapper.hasClass('pe-btn-lg')).toExist();
        });

        it('should render text correctly', function () {
            expect(wrapper.text()).toEqual('Large Button');
        });
    });

    describe('xLarge Button Test', function () {
        beforeEach(function () {
            wrapper = shallow(<Button btnSize="xl">xLarge Button</Button>);
        });

        it('should render the Button as button element', function () {
            expect(wrapper.node.type).toEqual('button');
        });

        it('should have the correct classNames', function () {
            expect(wrapper.hasClass('pe-btn')).toExist();
            expect(wrapper.hasClass('pe-btn-xl')).toExist();
        });

        it('should render text correctly', function () {
            expect(wrapper.text()).toEqual('xLarge Button');
        });
    });

});
