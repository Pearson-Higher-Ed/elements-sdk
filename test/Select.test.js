import React       from 'react';
import enzyme      from 'enzyme';
import { Select }  from '../index';

const { shallow } = enzyme;


describe('Select', () => {

  describe('Basic Select Test', function() {

    it('should render the Select as div element', function() {
      const wrapper = shallow(<Select id="selectTestId" labelText="Select Label:" changeHandler={() => {}} options={["coffee", "tea"]} >Test Select</Select>);
      expect(wrapper.getElement(0).type).toEqual('div');
    });

    it('should apply correct style for error type', function(){
      const wrapper = shallow(<Select id="selectTestId1" labelText="Select Label:" changeHandler={() => {}} options={["coffee", "tea"]} inputState='error' />);
      wrapper.instance().applySelectStyles();
      expect(wrapper.find('label').getElement(0).props.className).toEqual('pe-textLabelInput__label--label_error')
    });

    it('should apply correct style for readOnly type', function(){
      const wrapper = shallow(<Select id="selectTestId3" labelText="Select Label:" changeHandler={() => {}} options={["coffee", "tea"]} inputState='readOnly' />);
      wrapper.instance().componentDidMount();
      expect(wrapper.find('label').getElement(0).props.className).toEqual('pe-textLabelInput__label')
    });

    it('should apply correct style for no type', function(){
      const wrapper = shallow(<Select id="selectTestId4" labelText="Select Label:" changeHandler={() => {}} options={["coffee", "tea"]} />);
      wrapper.instance().componentDidMount();
      expect(wrapper.find('label').getElement(0).props.className).toEqual('pe-textLabelInput__label')
    });

    it('should apply correct style for default type', function(){
      const wrapper = shallow(<Select id="selectTestId" labelText="Select Label:" changeHandler={() => {}} options={["coffee", "tea"]} />);
      wrapper.instance().componentDidMount();
      expect(wrapper.find('label').getElement(0).props.className).toEqual('pe-textLabelInput__label')
    });

  })
})
