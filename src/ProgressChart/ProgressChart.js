/**
 * @class ProgressChart
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';
import { TYPES_LAYOUT, TYPES_LABEL_POSITION } from './consts';
import ProgressItem from './ProgressItem';

class ProgressChart extends PureComponent {
  renderItems() {
    const { items, totalValue, nameKey, valueKey, layout } = this.props;
    if (items.length === 0) {
      return null; // TODO show empty string
    }

    const isHorizontal = layout === 'horizontal';
    const total = totalValue || items.reduce((tot, item) => tot + item[valueKey], 0);

    return items.map((item, idx) => {
      const value = item[valueKey];
      const name = nameKey ? item[nameKey] : undefined;

      return (
        <ProgressItem
          key={item.key || `pi_{idx}`}
          index={idx}
          name={name}
          value={value}
          total={isHorizontal ? value : total}
          {...this.props}
        />
      );
    });

    return pitems;
  }

  render() {
    return <div className={styles.progressChart}>{this.renderItems()}</div>;
  }
}

ProgressChart.propTypes = {
  colorFormatter: PropTypes.func,
  hideLabel: PropTypes.boolean,
  hideOutline: PropTypes.boolean,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  labelPosition: PropTypes.oneOf(TYPES_LABEL_POSITION),
  layout: PropTypes.oneOf(TYPES_LAYOUT),
  nameDelimiter: PropTypes.string,
  nameKey: PropTypes.string,
  totalValue: PropTypes.number,
  valueFormatter: PropTypes.func,
  valueKey: PropTypes.string.isRequired
};

ProgressChart.defaultProps = {
  labelPosition: TYPES_LABEL_POSITION[0],
  layout: TYPES_LAYOUT[0]
};

export default ProgressChart;
