import React from 'react';
import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import Card from './Card';

describe('Card', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<Card description={[]} />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
