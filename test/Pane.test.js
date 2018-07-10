import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { Tabs, Pane } from '../index';

describe('Pane', () => {

  describe('Pane tests', function () {
    beforeEach(function () {
      this.wrapper = shallow(<Tabs>
                               <Pane label="Tab 1">
                                 <div>Uno</div>
                               </Pane>
                               <Pane label="Tab 2">
                                 <div>Dos</div>
                               </Pane>
                             </Tabs>);
    });

    it('passes the label through props', function () {
      expect(this.wrapper.node.props.children[0].props.children[0].props.children)
            .toBe('Tab 1');
    });

    it('passes children content through props', function() {
      expect(this.wrapper.node.props.children[1].props.children.props.children.props.children)
            .toBe('Uno');
    });

  });
});