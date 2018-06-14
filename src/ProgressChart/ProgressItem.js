/**
 * @class ProgressItem
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';
import { TYPES_LABEL_POSITION, TYPES_LAYOUT } from './consts';
import { qualitativeColorFormatter, numberValueFormatter } from './utils';

const barWidth = (value = 0, total) => {
  if (total < 0) {
    return '0';
  }

  return `${value / total * 100}%`;
};

class ProgressItem extends PureComponent {
  renderLabel(width) {
    const { colorFormatter, valueFormatter, index, name, nameDelimiter, total, value, hideLabel } = this.props;

    if (hideLabel) {
      return null;
    }

    let { labelPosition } = this.props;
    const color = colorFormatter(value, index);
    const labelParts = [valueFormatter(value, index)];

    if (!!name) {
      labelParts.unshift(nameDelimiter);
      labelParts.unshift(name);
    }

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
        {labelParts.join(' ')}
      </div>
    );
  }

  renderBar() {
    const { colorFormatter, index, total, value, labelPosition, hideOutline, layout } = this.props;
    const color = colorFormatter(value, index);
    const width = barWidth(value, total);
    const horizontal = layout === 'horizontal';

    const barWrapperStyle = {
      borderColor: hideOutline ? 'transparent' : color
    };

    const barStyle = { backgroundColor: color, width: horizontal ? '100%' : width };

    return (
      <div className={styles.barWrapper} style={barWrapperStyle}>
        <div className={styles.bar} style={barStyle} aria-hidden="true" />
        {labelPosition !== 'above' && labelPosition !== 'below' ? this.renderLabel(width) : null}
      </div>
    );
  }

  renderVertical() {
    const { labelPosition, layout } = this.props;

    return (
      <div className={styles['progressItem-vertical']}>
        {labelPosition === 'above' ? this.renderLabel() : null}
        {this.renderBar()}
        {labelPosition === 'below' ? this.renderLabel() : null}
      </div>
    );
  }

  renderHorizontal() {
    const { colorFormatter, index, total, value, labelPosition, hideOutline, layout } = this.props;
    const color = colorFormatter(value, index);
    const width = barWidth(value, total);
    const horizontal = layout === 'horizontal';
    const barStyle = { backgroundColor: color, width: '100%' };
    const itemStyle = { width };

    return (
      <div className={styles['progressItem-horizontal']} style={itemStyle}>
        {labelPosition === 'above' ? this.renderLabel() : null}
        <div className={styles.barWrapper} style={{ borderWidth: 0 }}>
          <div className={styles.bar} style={barStyle} aria-hidden="true" />
          {labelPosition !== 'above' && labelPosition !== 'below' ? this.renderLabel(width) : null}
        </div>
        {labelPosition === 'below' ? this.renderLabel() : null}
      </div>
    );
  }

  render() {
    if (this.props.layout === 'vertical') {
      return this.renderVertical();
    }

    return this.renderHorizontal();
  }
}

ProgressItem.propTypes = {
  colorFormatter: PropTypes.func,
  hideLabel: PropTypes.bool,
  hideOutline: PropTypes.bool,
  index: PropTypes.number,
  labelPosition: PropTypes.oneOf(TYPES_LABEL_POSITION),
  layout: PropTypes.oneOf(TYPES_LAYOUT).isRequired,
  name: PropTypes.string,
  nameDelimiter: PropTypes.string,
  total: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  valueFormatter: PropTypes.func
};

ProgressItem.defaultProps = {
  colorFormatter: qualitativeColorFormatter,
  hideLabel: false,
  hideOutline: false,
  index: 0,
  labelPosition: TYPES_LABEL_POSITION[0],
  nameDelimiter: '',
  valueFormatter: numberValueFormatter
};

export default ProgressItem;
