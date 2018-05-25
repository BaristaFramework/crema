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
    const {
      items,
      totalValue,
      labelPosition,
      layout,
      valueKey,
      colorFormatter,
      valueFormatter,
      hideOutline
    } = this.props;
    if (items.length === 0) {
      return null; // TODO show empty string
    }

    const isHorizontal = layout === 'horizontal';
    const total = totalValue || items.reduce((tot, item) => tot + item[valueKey], 0);

    return items.map((item, idx) => {
      const value = item[valueKey];
      return (
        <ProgressItem
          key={item.key || `pi_{idx}`}
          index={idx}
          value={value}
          total={isHorizontal ? value : total}
          labelPosition={labelPosition}
          colorFormatter={colorFormatter}
          valueFormatter={valueFormatter}
          hideOutline={hideOutline}
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
  hideOutline: PropTypes.boolean,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  labelPosition: PropTypes.oneOf(TYPES_LABEL_POSITION),
  layout: PropTypes.oneOf(TYPES_LAYOUT),
  totalValue: PropTypes.number,
  valueFormatter: PropTypes.func,
  valueKey: PropTypes.string.isRequired
};

ProgressChart.defaultProps = {
  labelPosition: TYPES_LABEL_POSITION[0],
  layout: TYPES_LAYOUT[0]
};

export default ProgressChart;
