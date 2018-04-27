import React, { Component } from 'react';

import Search from './containers/search';
import CountriesList from './containers/countries_list';
import './app.css'

class App extends Component {
  render() {
    return (
      <div>
        <Search/>
        <CountriesList/>
      </div>
    )
  }
}

export default App;
