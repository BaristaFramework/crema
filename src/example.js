/**
 * @class ExampleComponent
 */

import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './styles.css';

class ExampleComponent extends PureComponent {
  render() {
    const { text } = this.props;

    return <div className={styles.test}>Example Component: {text}</div>;
  }
}

ExampleComponent.propTypes = {
  text: PropTypes.string
};

export default ExampleComponent;
