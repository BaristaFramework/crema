import React, { Component, Fragment } from 'react';
import { Route, Link } from 'react-router-dom';

import BlockChartDemo from './BlockChartDemo';
import ProgressChartDemo from './ProgressChartDemo';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <nav class="main-nav">
          <h2> Navigation </h2>
          <ul>
            <li>
              <Link to="/block">Block Chart</Link>
            </li>
            <li>
              <Link to="/progress">Progress Chart</Link>
            </li>
          </ul>
        </nav>
        <section class="example">
          <Route path="/block" component={BlockChartDemo} />
          <Route path="/progress" component={ProgressChartDemo} />
        </section>
      </Fragment>
    );
  }
}
