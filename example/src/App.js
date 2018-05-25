import React, { Component, Fragment } from 'react';

import { ProgressChart } from '@baristaframework/crema';

const TEST = [
  {
    value: 100
  },
  {
    value: 90
  },
  {
    value: 80
  },
  {
    value: 70
  },
  {
    value: 60
  },
  {
    value: 50
  },
  {
    value: 40
  },
  {
    value: 30
  },

  {
    value: 20
  },
  {
    value: 10
  },
  {
    value: 0
  }
].map(item => {
  item.value *= 10000;
  return item;
});

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <h2> Percent of total </h2>
        <div className="chartWrapper">
          <ProgressChart items={TEST} valueKey="value" />
        </div>
        <h2> Percent of total - Right </h2>
        <div className="chartWrapper">
          <ProgressChart items={TEST} valueKey="value" labelPosition="right" />
        </div>

        <h2> Percent of total - inline </h2>
        <div className="chartWrapper">
          <ProgressChart items={TEST} valueKey="value" labelPosition="inline" />
        </div>

        <h2> Percent of Max </h2>
        <div className="chartWrapper">
          <ProgressChart items={TEST} valueKey="value" labelPosition="above" totalValue={100 * 10000} />
        </div>

        <h2> Percent of Max - below </h2>
        <div className="chartWrapper">
          <ProgressChart
            items={TEST}
            valueKey="value"
            labelPosition="below"
            totalValue={100 * 10000}
            hideOutline={true}
          />
        </div>

        <h2> Percent of Max - inline </h2>
        <div className="chartWrapper">
          <ProgressChart items={TEST} valueKey="value" labelPosition="inline" totalValue={100 * 10000} />
        </div>
      </Fragment>
    );
  }
}
