import React from 'react';
import expect from 'expect';
import { jsdom } from 'jsdom';
import { mount } from 'enzyme';
import { Tabs, Pane } from '../index';

describe('Pane', () => {

  describe('Pane tests', function () {
    const document = jsdom('');
    Object.keys(document.defaultView).forEach((property) => {
      if (typeof global[property] === 'undefined') {
        global[property] = document.defaultView[property];
      }
    });
    let wrapper;
    beforeEach(function () {
      wrapper = mount(<Tabs>
                           <Pane label="Tab 1">
                             <div>Uno</div>
                           </Pane>
                           <Pane label="Tab 2">
                             <div>Dos</div>
                           </Pane>
                         </Tabs>);
    });

    it('passes the label through props', function () {
      expect(wrapper.instance().props.children[0].props.label)
            .toEqual('Tab 1')
    });

    it('passes children content through props', function() {
      expect(wrapper.contains(<div>Uno</div>))
            .toEqual(true)
    });

  });
});
