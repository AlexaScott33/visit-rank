import React, { Component } from 'react';
import { connect } from 'react-redux';
import ToggledSaved from './ToggleSaved';
import Form from './Form';
import SavedList from './SavedList';
import { toggleSaved } from '../actions/visits';

import './App.css';

class App extends Component {
  render() {
    // console.log('APP PROPS', this.props);
    if (this.props.toggled === false) {
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
      return(
        <div>
        <header className="header-container">
          <h1>How popular are your sites?</h1>
        </header>
        <main>
          <button
          onClick={() => this.props.dispatch(toggleSaved())}>Back</button>
          <SavedList />
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

