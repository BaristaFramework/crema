import React from 'react';
import { ProgressChart } from '../';

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

/*
export default class ProgressChartDemo extends Component {
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
          <ProgressChart
            items={TEST}
            valueKey="value"
            nameKey="name"
            nameDelimiter="-"
            labelPosition="above"
            totalValue={100 * 10000}
          />
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
        <div className="chartWrapper" style={{ fontSize: '16px' }}>
          <ProgressChart items={TEST} valueKey="value" labelPosition="inline" totalValue={100 * 10000} />
        </div>

        <h2> Percent of total - horizontal</h2>
        <div className="chartWrapper">
          <ProgressChart items={TEST} valueKey="value" layout="horizontal" valueFormatter={valueLabel} />
        </div>

        <h2> Percent of total - horizontal above</h2>
        <div className="chartWrapper">
          <ProgressChart items={TEST} valueKey="value" layout="horizontal" labelPosition="above" />
        </div>

        <h2> Percent of total - horizontal below</h2>
        <div className="chartWrapper">
          <ProgressChart items={TEST} valueKey="value" layout="horizontal" labelPosition="below" />
        </div>

        <h2> Percent of total - horizontal inline</h2>
        <div className="chartWrapper">
          <ProgressChart items={TEST} valueKey="value" layout="horizontal" labelPosition="inline" />
        </div>
      </Fragment>
    );
  }
}
*/

describe('Progress Chart', () => {
  it('It exists', () => {
    expect(ProgressChart).toBeTruthy();
  });

  it('Using Defaults', () => {
    <ProgressChart items={TEST_DATA} />;
  });

  it('Using horizontal layout and custom formatter', () => {
    <ProgressChart items={TEST_DATA} layout="horizontal" valueFormatter={valueLabel} />;
  });

  it('Using horizontal layout and above label', () => {
    <ProgressChart items={TEST_DATA} layout="horizontal" labelPosition="above" nameKey="name" />;
  });

  it('Using name with delimiter', () => {
    <ProgressChart items={TEST_DATA} nameKey="name" nameDelimiter="-" labelPosition="above" totalValue={100 * 10000} />;
  });

  it('Using hidden outlines', () => {
    <ProgressChart items={TEST_DATA} labelPosition="below" totalValue={100 * 10000} hideOutline={true} />;
  });

  it('Using hidden labels', () => {
    <ProgressChart items={TEST_DATA} labelPosition="inline" hideLabel={true} />;
  });
});
