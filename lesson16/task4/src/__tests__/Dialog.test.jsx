import React from 'react';
import { shallow } from 'enzyme';
import Dialog from '../Dialog';


describe('Dialog', () => {
  it('should be closed with state isOpen = false', () => {
    const props = {isOpen: false, onClose: jest.fn()};
    const wrappedComponent = shallow(<Dialog {...props}/>);
    expect(wrappedComponent.find('.dialog').exists()).toEqual(false);
  });

  it('should be opened with state isOpen = true', () => {
    const props = {isOpen: true, onClose: jest.fn()};
    const wrappedComponent = shallow(<Dialog {...props}/>);
    expect(wrappedComponent.find('.dialog').exists()).toEqual(true);
  });

  it('should be close the dialog after click on +', () => {
    const props = {isOpen: true, onClose: jest.fn()};
    const wrappedComponent = shallow(<Dialog {...props} />);
    const closeBtn = wrappedComponent.find('.dialog__close-btn');   
    closeBtn.simulate('click');
    expect(props.onClose).toBeCalled();
  });

  it('should be render the title', () => {
    const props = {isOpen: true, onClose: jest.fn(), title: 'Title'};
    const wrappedComponent = shallow(<Dialog {...props}/>);
   expect(wrappedComponent.find('.dialog__title').exists()).toBeTruthy();   
   });

  it('should be render the children', () => {
    const props = {isOpen: true, onClose: jest.fn(), children: 'Children'};
    const wrappedComponent = shallow(<Dialog {...props}/>);
   expect(wrappedComponent.find('.dialog__content').exists()).toBeTruthy();   
  });

});