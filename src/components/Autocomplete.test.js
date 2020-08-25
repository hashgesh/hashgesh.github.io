import React from 'react';
import Autocomplete from '../Autocomplete.react';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<Autocomplete></Autocomplete>).toJSON();
  expect(tree).toMatchSnapshot();
});
