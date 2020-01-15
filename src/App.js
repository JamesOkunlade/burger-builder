import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import axios from 'axios';

class App extends Component{
  componentDidMount () {
    axios.get('localhost:/3000/shipments/')
      .then(response => {
        console.log(response);
      });
  }

  render() {
    return (
      <div>
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
    );
  }
}

export default App;
