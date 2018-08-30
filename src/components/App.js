import React, { Component } from 'react';
import ToggledSaved from './ToggleSaved';
import Form from './Form';

import './App.css';

class App extends Component {
  render() {
    console.log('APP PROPS', this.props);
    return (
      <div>
        <header className="header-container">
          <h1>How popular are your sites?</h1>
        </header>
        <main>
          <ToggledSaved />
          <Form />
        </main>
      </div>
    );
  }
}

export default App;
