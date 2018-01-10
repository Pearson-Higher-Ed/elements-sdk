import React          from 'react';
import enzyme         from 'enzyme';
import { Tabs, Pane } from '../index';

const { shallow, mount } = enzyme;

describe('Tabs tests', () => {

    it('renders a ul', function () {
      const wrapper = mount(<Tabs>
                               <Pane label="Tab 1">
                                 <div>Content 1</div>
                               </Pane>
                               <Pane label="Tab 2">
                                 <div>Content 2</div>
                               </Pane>
                             </Tabs>);

      expect(wrapper.name()).toEqual('Tabs');
    });

    it('sets the correct selected tab', function () {
      const wrap = mount(<Tabs><Pane label="1"><div>1</div></Pane><Pane label="2"><div>Content 2</div></Pane></Tabs>);
      const wrappy = mount(<Tabs selected={1}><Pane label="1"><div>1</div></Pane><Pane label="2"><div>Content 2</div></Pane></Tabs>);

      expect(wrap.state("selected")).toEqual(0);
      expect(wrappy.state("selected")).toEqual(1);
    });

});
