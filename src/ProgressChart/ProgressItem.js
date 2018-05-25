/**
 * @class ProgressItem
 */

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import { TYPES_LABEL_POSITION } from './consts'
import { qualitativeColorFormatter, numberValueFormatter } from './utils'

// TODO FUTURE - import styles from './styles.css';

class ProgressItem extends PureComponent {
  render() {
    const { colorFormatter, valueFormatter, index, total, value } = this.props

    const color = colorFormatter(value, index)
    const label = valueFormatter(value, index)
    const labelStyle = { color }
    const barWrapperStyle = { borderColor: color }
    const barStyle = { backgroundColor: color }

    return (
      <div className="bfw crema ProgressItem">
        <div className="bar-wrapper" style={barWrapperStyle}>
          <div className="bar" style={barStyle} />
        </div>
        <div className="label" style={labelStyle}>
          {label}
        </div>
      </div>
    )
  }
}

ProgressItem.propTypes = {
  colorFormatter: PropTypes.func,
  index: PropTypes.number,
  labelPosition: PropTypes.oneOf(TYPES_LABEL_POSITION),
  total: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  valueFormatter: PropTypes.func
}

ProgressItem.defaultProps = {
  colorFormatter: qualitativeColorFormatter,
  index: 0,
  labelPosition: TYPES_LABEL_POSITION[0],
  valueFormatter: numberValueFormatter
}

export default ProgressItem
