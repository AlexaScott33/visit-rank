import React, { Component } from 'react';
import Form from './Form';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <header className="header-container">
          <h1>How popular are your sites?</h1>
        </header>
        <main>
          <Form />
        </main>
      </div>
    );
  }
}

export default App;
