import React, { Component } from 'react';

import Layout from './hoc/Layout/Layout';
import BurguerBuilder from './containers/BurgerBuilder/BurgerBuilder';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Layout>
          <BurguerBuilder />
        </Layout>
      </div>
    )
  }
}

export default App;
