/**
 * @class BlockChart
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';
import BlockItem from './BlockItem';

class BlockChart extends PureComponent {
  renderItems() {
    const { items, totalValue, valueKey } = this.props;
    if (items.length === 0) {
      return null; // TODO show empty string
    }

    const total = totalValue || items.reduce((tot, item) => tot + item[valueKey], 0);

    return items.map((item, idx) => {
      const value = item[valueKey];

      return <BlockItem key={item.key || `pi_{idx}`} index={idx} value={value} total={total} {...this.props} />;
    });

    return pitems;
  }

  render() {
    return <div className={styles.blockChart}>{this.renderItems()}</div>;
  }
}

BlockChart.Item = BlockItem;

BlockChart.propTypes = {
  colorFormatter: PropTypes.func,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  totalValue: PropTypes.number,
  valueKey: PropTypes.string
};

BlockChart.defaultProps = {
  valueKey: 'value'
};

export default BlockChart;
