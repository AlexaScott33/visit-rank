import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleSaved } from '../actions/visits';

class ToggleSaved extends Component {
    handleToggle() {
        this.props.dispatch(toggleSaved());
    }
    render() {
        return(
            <div>
                <button
                onClick={() => this.handleToggle()}>Check out your saved searches!</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    visits: state.visits,
    saved: state.saved,
    toggled: state.toggled,
    loading: state.loading,
    error: state.error
});

export default connect(mapStateToProps)(ToggleSaved);
