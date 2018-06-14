import React from 'react';
import renderer from 'react-test-renderer';
import { BlockItem } from '../';

describe('Block Item', () => {
  it('It exists', () => {
    expect(BlockItem).toBeTruthy();
  });

  it('It Renders', () => {
    const component = renderer.create(<BlockItem value={10} total={10} />);

    expect(component).toBeTruthy();
  });
});
