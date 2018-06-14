import React from 'react';
import renderer from 'react-test-renderer';
import { BlockChart } from '../';

const TEST_DATA = [
  {
    name: 'Most',
    value: 100
  },
  {
    name: 'Middle',
    value: 90
  },
  {
    name: 'Middle',
    value: 80
  },
  {
    name: 'Middle',
    value: 70
  },
  {
    name: 'Middle',
    value: 60
  },
  {
    name: 'Middle',
    value: 50
  },
  {
    name: 'Middle',
    value: 40
  },
  {
    name: 'Middle',
    value: 30
  },
  {
    name: 'Middle',
    value: 20
  },
  {
    name: 'Middle',
    value: 10
  },
  {
    name: 'Least',
    value: 0
  }
].map(item => {
  item.value *= 10000;
  return item;
});

const valueLabel = value => {
  let val = value;
  let abbr = '';

  if (val / 1000 >= 1) {
    val = val / 1000;
    abbr = 'K';
  }

  if (val / 1000 >= 1) {
    val = val / 1000;
    abbr = 'M';
  }

  return `${val}${abbr}`;
};

describe('Block Chart', () => {
  it('It exists', () => {
    expect(BlockChart).toBeTruthy();
  });

  it('Using Defaults', () => {
    renderer.create(<BlockChart items={TEST_DATA} />);
  });

  it('Using Empty Items', () => {
    renderer.create(<BlockChart items={[]} />);
  });

  it('Supply Total Value', () => {
    renderer.create(<BlockChart items={TEST_DATA} nameKey="name" totalValue={100 * 10000} />);
  });
});
