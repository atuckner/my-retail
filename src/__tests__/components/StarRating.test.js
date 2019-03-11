import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components'

import StarRating from '../../components/StarRating';

test('render StarRating with 1 star', () => {
  const component = renderer.create(
    <StarRating rating={1}/>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('render StarRating with 2 stars', () => {
  const component = renderer.create(
    <StarRating rating={2} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('render StarRating with 3 stars', () => {
  const component = renderer.create(
    <StarRating rating={3} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('render StarRating with 4 stars', () => {
  const component = renderer.create(
    <StarRating rating={4} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('render StarRating with 5 stars', () => {
  const component = renderer.create(
    <StarRating rating={5} />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
