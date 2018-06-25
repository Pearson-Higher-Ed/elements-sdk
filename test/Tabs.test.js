import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import { jsdom } from 'jsdom';
import { Tabs, Pane } from '../index';

describe('Tabs', () => {
  const document = jsdom('');
  Object.keys(document.defaultView).forEach((property) => {
    if (typeof global[property] === 'undefined') {
      global[property] = document.defaultView[property];
    }
  });

  describe('Tabs tests', function () {

    it('renders a div', function () {
      const wrapper = shallow(<Tabs>
                               <Pane label="Tab 1">
                                 <div>Content 1</div>
                               </Pane>
                               <Pane label="Tab 2">
                                 <div>Content 2</div>
                               </Pane>
                             </Tabs>);
      expect(wrapper.node.props.children[0].type).toEqual('div');
    });

    it('sets the correct selected tab', function () {
      const wrap = mount(<Tabs><Pane label="1"><div>1</div></Pane><Pane label="2"><div>Content 2</div></Pane></Tabs>);
      const wrappy = mount(<Tabs selected={1}><Pane label="1"><div>1</div></Pane><Pane label="2"><div>Content 2</div></Pane></Tabs>);
      expect(wrap.node.state.selected).toEqual(0);
      expect(wrappy.node.state.selected).toEqual(1);
    });

  });
});
