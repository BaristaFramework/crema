/**
 * @class BlockItem
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';
import { TYPES_LABEL_POSITION, TYPES_LAYOUT } from './consts';
import { qualitativeColorFormatter } from './utils';

class BlockItem extends PureComponent {
  render() {
    const { colorFormatter, index, total, value } = this.props;
    const backgroundColor = colorFormatter(value, index, total);
    const itemStyle = { backgroundColor };
    return <b className={styles.BlockItem} style={itemStyle} />;
  }
}

BlockItem.propTypes = {
  colorFormatter: PropTypes.func,
  index: PropTypes.number,
  name: PropTypes.string,
  total: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

BlockItem.defaultProps = {
  colorFormatter: qualitativeColorFormatter,
  index: 0
};

export default BlockItem;
