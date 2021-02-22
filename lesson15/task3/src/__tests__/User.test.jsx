import React from 'react';
import { shallow } from 'enzyme';
import User from '../User';

describe('User', () => {
  it('should render the passed name', () => {
    const name = {name};
    const wrappedComponent = shallow(<User name={name} />);

    expect(wrappedComponent.find('Bob'));
  });

  it('should render the passed age', () => {
    const age = {age};
    const wrappedComponent = shallow(<User age={age} />,
    );

    expect(wrappedComponent.find('div[children="Age: 21"]').length).toBe(0);
  });
});