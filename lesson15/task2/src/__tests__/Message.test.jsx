import React from 'react';
import { shallow } from 'enzyme';
import Message from '../Message';

describe('Mailbox', () => {
  it('should not render if text is not transfer', () => {
    const text = {text};
    const wrappedComponent = shallow(<Message text={!text} />);

    expect(wrappedComponent.find('.message'));
  });

  it('should render if text is transfer', () => {
    const text = {text};
    const wrappedComponent = shallow(<Message text={text} />,
    );

    expect(wrappedComponent.find('.message').text(text));
  });
});