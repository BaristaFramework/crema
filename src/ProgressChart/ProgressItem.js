/**
 * @class ProgressItem
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';
import { TYPES_LABEL_POSITION } from './consts';
import { qualitativeColorFormatter, numberValueFormatter } from './utils';

const barWidth = (value = 0, total) => {
  if (!total) {
    return '100%';
  }

  if (total < 0) {
    return '0';
  }

  return `${value / total * 100}%`;
};

class ProgressItem extends PureComponent {
  renderLabel(width) {
    const { colorFormatter, valueFormatter, index, total, value } = this.props;
    let { labelPosition } = this.props;

    const color = colorFormatter(value, index);
    const label = valueFormatter(value, index);
    const labelStyle = { color };

    if (labelPosition === 'inline') {
      if (width === '100%') {
        labelPosition = 'right';
      } else {
        labelStyle.left = width;
      }
    }

    return (
      <div className={styles[`label-${labelPosition}`]} style={labelStyle}>
        {label}
      </div>
    );
  }

  renderBar() {
    const { colorFormatter, index, total, value, labelPosition, hideOutline } = this.props;
    const color = colorFormatter(value, index);
    const barWrapperStyle = { borderColor: hideOutline ? 'transparent' : color };
    const width = barWidth(value, total);
    const barStyle = { backgroundColor: color, width };

    return (
      <div className={styles.barWrapper} style={barWrapperStyle}>
        <div className={styles.bar} style={barStyle} aria-hidden="true" />
        {labelPosition !== 'above' && labelPosition !== 'below' ? this.renderLabel(width) : null}
      </div>
    );
  }

  render() {
    const { labelPosition } = this.props;

    return (
      <div className={styles.progressItem}>
        {labelPosition === 'above' ? this.renderLabel() : null}
        {this.renderBar()}
        {labelPosition === 'below' ? this.renderLabel() : null}
      </div>
    );
  }
}

ProgressItem.propTypes = {
  colorFormatter: PropTypes.func,
  hideOutline: PropTypes.boolean,
  index: PropTypes.number,
  labelPosition: PropTypes.oneOf(TYPES_LABEL_POSITION),
  total: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  valueFormatter: PropTypes.func
};

ProgressItem.defaultProps = {
  colorFormatter: qualitativeColorFormatter,
  hideOutline: false,
  index: 0,
  labelPosition: TYPES_LABEL_POSITION[0],
  valueFormatter: numberValueFormatter
};

export default ProgressItem;
