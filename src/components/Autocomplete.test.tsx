import React from 'react';
import renderer from 'react-test-renderer';

import AutoComplete from './AutoComplete';

describe('AutoComplete', () => {
  test('snapshot renders', () => {
    const component = renderer.create(<AutoComplete />);
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
