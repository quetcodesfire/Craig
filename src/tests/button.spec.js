import React from 'react';
import { shallow } from 'enzyme';

import { Button } from '../components/Button';

describe('Button', () => {
  const text = 'Some kind of text';
  const button = shallow(<Button className="test" type="test">{text}</Button>);
  console.log(shallow(button))
  // console.log(shallow(<button />))
  it('should exist', () => {
    // expect(button.find('span').text()).toEqual(text)
  })
})