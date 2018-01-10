import React        from 'react';
import enzyme       from 'enzyme';
import { Calendar } from '../index';

const { mount } = enzyme;


describe('Calendar', function () {

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
      const daysFR = ['dimanche', 'lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'samedi'];
      const wrapper = mount(<Calendar dayNamesFull={daysFR} />);
      expect(wrapper.instance().props.dayNamesFull).toEqual(daysFR);
    });


    describe('mounted', function () {
      const date = new Date();
      const currentDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
      const month = date.getMonth();

      const wrapper = mount(<Calendar />);

      it('selects a new date', function() {
        const selectedDate = new Date(date.getFullYear(), date.getMonth(), 3);
        expect(wrapper.instance().state.selectedDt).toEqual(currentDate);
        wrapper.find('#day3').simulate('click');
        expect(wrapper.instance().state.selectedDt).toEqual(selectedDate);
      });

      it('goes to prev month if not January', function() {
        if (wrapper.instance().state.month > 0) {
          wrapper.find('[aria-label="Prev month"]').simulate('click');
          expect(wrapper.instance().state.month).toEqual(month - 1);
        }
      });

      it('goes to next month if not December', function() {
        if (wrapper.instance().state.month < 11) {
          wrapper.find('[aria-label="Next month"]').simulate('click');
          expect(wrapper.instance().state.month).toEqual(month + 1);
        }
      });

      it('goes to prev month if January', function() {
        if (wrapper.instance().state.month === 0) {
          wrapper.find('[aria-label="Prev month"]').simulate('click');
          expect(wrapper.instance().state.month).toEqual(11);
        }
      });

      it('goes to next month if December', function() {
        if (wrapper.instance().state.month === 11) {
          wrapper.find('[aria-label="Next month"]').simulate('click');
          expect(wrapper.instance().state.month).toEqual(0);
        }
      });

      it('calls calc fx', function() {
        const m = wrapper.instance().state.month;
        const y = wrapper.instance().state.year;
        expect(wrapper.instance().calc(y,m)).toHaveProperty('daysInMonth', 28);
      });

      it('calls handleKeys fx keyCode:0', function() {
        const e = {keyCode:0};
        expect(wrapper.instance().handleKeys(e));
      });

      it('calls handleKeys fx keyCode:13', function() {
        const e = {keyCode:13};
        expect(wrapper.instance().handleKeys(e));
      });

      it('calls getPrev fx', function() {
        expect(wrapper.instance().getPrev());
      });

      it('calls getPrev fx conditional', function() {
        wrapper.instance().state.month = 0;
        expect(wrapper.instance().getPrev());
      });

      it('calls getNext fx', function() {
        expect(wrapper.instance().getNext());
      });

      it('calls enterSelect fx', function() {
        expect(wrapper.instance().enterSelect());
      });

    });

});
