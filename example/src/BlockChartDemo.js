import React, { Component, Fragment } from 'react';

import { BlockChart } from '@baristaframework/crema';

const TEST = [
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

export default class BlockChartDemo extends Component {
  render() {
    return (
      <Fragment>
        <h1> Block Chart Examples </h1>

        <h2> Percent of total </h2>
        <div className="chartWrapper">
          <BlockChart items={TEST} valueKey="value" />
        </div>

        <h2> Percent of Max </h2>
        <div className="chartWrapper">
          <BlockChart items={TEST} valueKey="value" totalValue={100 * 10000} />
        </div>

        <h2> Percent of Max - larger </h2>
        <div className="chartWrapper" style={{ fontSize: '60px' }}>
          <BlockChart items={TEST} valueKey="value" labelPosition="inline" totalValue={100 * 10000} />
        </div>

        <h2> Percent of total - constrained</h2>
        <div className="chartWrapper" style={{ width: '123px', maxWidth: 'auto' }}>
          <BlockChart items={TEST} valueKey="value" layout="horizontal" valueFormatter={valueLabel} />
        </div>
      </Fragment>
    );
  }
}
