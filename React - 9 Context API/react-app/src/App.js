import React, { Component } from 'react';
import './App.css';
import Contacts from './Components/Contacts'

import {Provider} from './context'

class App extends Component {
  render() {
    return (
      /* Wrapped in provider to use state application wide */
      <Provider>
        <div className="App">
          <h1>Events in React</h1>
          <Contacts />
        </div>
      </Provider>
    );
  }
}

export default App;
