/**
 * @class ProgressChart
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { TYPES_LAYOUT, TYPES_LABEL_POSITION } from './consts';

// TODO FUTURE - import styles from './styles.css';

class ProgressChart extends PureComponent {
  render() {
    return <div className="bfw crema ProgressChart">Coming Soon</div>;
  }
}

ProgressChart.propTypes = {
  labelPosition: PropTypes.oneOf(TYPES_LABEL_POSITION),
  layout: PropTypes.oneOf(TYPES_LAYOUT)
};

ProgressChart.defaultProps = {
  labelPosition: TYPES_LABEL_POSITION[0],
  layout: TYPES_LAYOUT[0]
};

export default ProgressChart;
