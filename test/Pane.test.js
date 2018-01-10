import React from 'react';
import enzyme from 'enzyme';
import { Tabs, Pane } from '../index';

const { mount } = enzyme;

describe('Pane tests', () => {

    const wrapper = mount(<Tabs>
                             <Pane label="Tab 1">
                               <div>Uno</div>
                             </Pane>
                             <Pane label="Tab 2">
                               <div>Dos</div>
                             </Pane>
                           </Tabs>);

    it('passes the label through props', function () {
      expect(wrapper.find('Pane').contains(<div>Uno</div>)).toEqual(true);
    });

    it('changes tabs on click', function () {
    wrapper.find('[aria-selected=false]').simulate('click');
    wrapper.update();
    expect(wrapper.find('Pane').contains(<div>Dos</div>)).toEqual(true);

    });

});
