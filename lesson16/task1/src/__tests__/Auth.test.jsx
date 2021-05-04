import React from 'react';
import { shallow } from 'enzyme';
import Auth from '../Auth';

describe('Auth', () => {
  it('should display Login button if user logged out', () => {
    const wrappedComponent = shallow(<Auth />);
    expect(wrappedComponent.find('Login').exists()).toBeTruthy();
  });
  
  it('should display Logout button if user logged in', () => {
    const wrappedComponent = shallow(<Auth />);
    wrappedComponent.find('Login').prop('onLogin')();
    
    expect(wrappedComponent.find('Logout').exists()).toBeTruthy();
  });
});