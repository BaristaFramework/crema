import React from 'react';
import renderer from 'react-test-renderer';
import { ProgressItem } from '../';

describe('Progress Item', () => {
  it('It exists', () => {
    expect(ProgressItem).toBeTruthy();
  });

  it('It renders - only required', () => {
    renderer.create(<ProgressItem value={5} total={100} layout="horizontal" />);
  });

  it('It renders - with name', () => {
    renderer.create(<ProgressItem name="test" value={5} total={100} layout="vertical" />);
  });

  it('It renders - negative total', () => {
    renderer.create(<ProgressItem value={5} total={-1} layout="horizontal" />);
  });
});
