import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToggledSaved from './ToggleSaved';
import Form from './Form';
import { toggleSaved } from '../actions/visits';

import './App.css';

class App extends Component {
  render() {
    console.log('APP PROPS', this.props);
    if (this.props.toggled === false) {
      console.log('FALSE');
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
    if (this.props.toggled === true) {
      console.log('TRUE');
      return(
        <div>
        <header className="header-container">
          <h1>How popular are your sites?</h1>
        </header>
        <main>
          <button
          onClick={() => this.props.dispatch(toggleSaved())}>Back</button>
        </main>
        Help
      </div>
      );
    }
  }
}

const mapStateToProps = (state) => ({
  visits: state.visits,
  saved: state.saved,
  toggled: state.toggled,
  loading: state.loading,
  error: state.error
});

export default connect(mapStateToProps)(App);

