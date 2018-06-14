import React, { Component, Fragment } from 'react';
import { Route, Link } from 'react-router-dom';

import ProgressChartDemo from './ProgressChartDemo';

export default class App extends Component {
  render() {
    return (
      <Fragment>
        <nav class="main-nav">
          <h2> Navigation </h2>
          <ul>
            <li>
              <Link to="/progress">Progress Chart</Link>
            </li>
          </ul>
        </nav>
        <section class="example">
          <Route path="/progress" component={ProgressChartDemo} />
        </section>
      </Fragment>
    );
  }
}
