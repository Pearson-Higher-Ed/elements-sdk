import React       from 'react';
import expect      from 'expect';
import { shallow } from 'enzyme';
import { Select }  from '../index';

describe('Select', () => {

  describe('Basic Select Test', function() {

    it('should render the Select as div element', function() {
      this.wrapper = shallow(<Select id="selectTestId" labelText="Select Label:" changeHandler={() => {}} options={["coffee", "tea"]} >Test Select</Select>);
      expect(this.wrapper.getElement().type).toEqual('div');
    });

    it('should apply correct style for error type', function(){
      this.wrapper = shallow(<Select id="selectTestId1" labelText="Select Label:" changeHandler={() => {}} options={["coffee", "tea"]} inputState='error' />);
      this.wrapper.instance().applySelectStyles();
      this.wrapper.update();
      expect(this.wrapper.find('label').getElement().props.className).toEqual('pe-textLabelInput__label--label_error')
    });

    it('should apply correct style for readOnly type', function(){
      this.wrapper = shallow(<Select id="selectTestId3" labelText="Select Label:" changeHandler={() => {}} options={["coffee", "tea"]} inputState='readOnly' />);
      this.wrapper.instance().componentDidMount();
      this.wrapper.update();
      expect(this.wrapper.find('label').getElement().props.className).toEqual('pe-textLabelInput__label')
    });

    it('should apply correct style for no type', function(){
      this.wrapper = shallow(<Select id="selectTestId4" labelText="Select Label:" changeHandler={() => {}} options={["coffee", "tea"]} />);
      this.wrapper.instance().componentDidMount();
      this.wrapper.update();
      expect(this.wrapper.find('label').getElement().props.className).toEqual('pe-textLabelInput__label')
    });

    it('should apply correct style for default type', function(){
      this.wrapper = shallow(<Select id="selectTestId" labelText="Select Label:" changeHandler={() => {}} options={["coffee", "tea"]} />);
      this.wrapper.instance().componentDidMount();
      this.wrapper.update();
      expect(this.wrapper.find('label').getElement().props.className).toEqual('pe-textLabelInput__label')
    });

  })
})
