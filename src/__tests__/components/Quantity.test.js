import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components'

import Quantity from '../../components/Quantity';

test('render Quantity', () => {
  const component = renderer.create(
    <Quantity/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
