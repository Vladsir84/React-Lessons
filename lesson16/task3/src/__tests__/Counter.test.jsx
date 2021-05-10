import React from 'react';
import { shallow } from 'enzyme';
import Counter from '../Counter';


describe('Counter', () => {
  it('starts with a count of 0', () => {
    const wrappedComponent = shallow(<Counter />);
    const text = wrappedComponent.find('.counter__value').text();
    expect(text).toEqual('0');
  });

  it('should be increase by 1 after click on plus button', () => {
    const wrappedComponent = shallow(<Counter />);
    const incrementBtn = wrappedComponent.find('.counter__button:last-child');   
    incrementBtn.simulate('click');
    const text = wrappedComponent.find('.counter__value').text();
    expect(text).toEqual('1');
  });

  it('should be decrease by 1 after click on minus button', () => {
    const wrappedComponent = shallow(<Counter />);
    const decrementBtn = wrappedComponent.find('.counter__button:first-child');   
    decrementBtn.simulate('click');
    const text = wrappedComponent.find('.counter__value').text();
    expect(text).toEqual('-1');
  });

  it('should be zero after click on counter value', () => {
    const wrappedComponent = shallow(<Counter />);
    const reset = wrappedComponent.find('.counter__value');
    reset.simulate('click');
    const text = wrappedComponent.find('.counter__value').text();
    expect(text).toEqual('0');
  });

});