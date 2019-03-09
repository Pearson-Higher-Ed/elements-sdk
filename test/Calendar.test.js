import React from 'react';
import expect from 'expect';
import { mount } from 'enzyme';
import { jsdom } from 'jsdom';
import { Calendar } from '../index';

describe('Calendar', () => {

  describe('Calendar', function () {
    const document = jsdom('');

    Object.keys(document.defaultView).forEach((property) => {
      if (typeof global[property] === 'undefined') {
        global[property] = document.defaultView[property];
      }
    });

    it('sets the minDate properly', function() {
      const minDate = new Date(2017, 5, 5);
      const wrapper = mount(<Calendar minDate={minDate} />);
      expect(wrapper.instance().props.minDate).toEqual(minDate);
    });

    it('disables pastDates', function() {
      const wrapper = mount(<Calendar disablePast />);
      expect(wrapper.instance().props.disablePast).toEqual(true);
    });

    it('provides contrast', function() {
      const wrapper = mount(<Calendar contrast />);
      expect(wrapper.instance().props.contrast).toEqual(true);
    });

    it('passes intl months', function() {
      const monthsFR = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin',
        'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
      const wrapper = mount(<Calendar monthNamesFull={monthsFR} />);
      expect(wrapper.instance().props.monthNamesFull).toEqual(monthsFR);
    });

    it('passes intl days', function() {
      const daysFR = ['dimanche', 'lundi', 'Mardi', 'Mercredi', 'Jeudi',
        'Vendredi', 'samedi'];
      const wrapper = mount(<Calendar dayNamesFull={daysFR} />);
      expect(wrapper.instance().props.dayNamesFull).toEqual(daysFR);
    });

    describe('mounted', function () {
      const date = new Date();
      const currentDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
      const month = date.getMonth();

      it('selects a new date', function() {
        const selectedDate = new Date(date.getFullYear(), date.getMonth(), 3);
        const newWrapper = mount(<Calendar newSelectedDt={selectedDate} />)
        newWrapper.find('#day4').simulate('click');
        expect(newWrapper.instance().state.selectedDt).toEqual(new Date(date.getFullYear(), date.getMonth(), 4));
      });

      it('goes to prev month if not January', function() {
        const wrapper = mount(<Calendar />);
        if (wrapper.instance().state.month > 0) {
          wrapper.find('[aria-label="Prev month"]').simulate('click');
          expect(wrapper.instance().state.month).toEqual(month - 1);
        }
      });

      it('goes to next month if not December', function() {
        const wrapper = mount(<Calendar />);
        if (wrapper.instance().state.month < 11) {
          wrapper.find('[aria-label="Next month"]').simulate('click');
          expect(wrapper.instance().state.month).toEqual(month + 1);
        }
      });

      it('goes to prev month if January', function() {
        const wrapper = mount(<Calendar />);
        if (wrapper.instance().state.month === 0) {
          wrapper.find('[aria-label="Prev month"]').simulate('click');
          expect(wrapper.instance().state.month).toEqual(11);
        }
      });

      it('goes to next month if December', function() {
        const wrapper = mount(<Calendar />);
        if (wrapper.instance().state.month === 11) {
          wrapper.find('[aria-label="Next month"]').simulate('click');
          expect(wrapper.instance().state.month).toEqual(0);
        }
      });
    });

  });
});
