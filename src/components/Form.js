import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVisits, savedSuccess } from '../actions/visits';

import './Form.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
            display: 'search'
        }
    }

    handleChange(e) {
        this.setState({
            input: e.target.value
        });
    }

    handleClick() {
        this.setState({
            display: 'results'
        });
    }

    handleClick2() {
        this.setState({
            display: 'search'
        });
    }

    handleSavedClick(domain, rank) {
        console.log(domain);
        console.log(rank);
        if (this.props.saved.length === 0) {
            console.log('empty array need to dispatch action');
            this.props.dispatch(savedSuccess(domain, rank));
        } else if (this.props.saved.length > 0) {
            console.log('saved array is not empty so check for duplicates');
            for(let i = 0; i < this.props.saved.length; i++) {
                if (this.props.saved[i].domain === domain) {
                    console.log('site already exists in saved array, leaving without dispatching');
                    return;
                }
            }
            console.log('checked for duplicates NONE, now dispatch action');
            this.props.dispatch(savedSuccess(domain, rank)); 
        }
    }
    render() {
        console.log(this.props);
        // console.log(this.state);
        if (this.state.display === 'search') {
            return(
                <div className="form-container">
                    <form>
                        <label className="search-label" htmlFor="searchInput">Search</label>
                        <input 
                            className="search-input"
                            type="text" 
                            name="searchInput" 
                            placeholder="e.g. amazon.com"
                            onChange={(e) => this.handleChange(e)}>
                        </input>
                        <button 
                            className="search-button"
                            type="submit" 
                            onClick={(e) => {
                                e.preventDefault(); 
                                if (this.state.input === '' || !this.state.input.toLowerCase().includes('.com')) {
                                    alert('Please enter in valid domain address. e.g amazon.com ');
                                } else {
                                    const userInput = this.state.input;
                                    const lowerCaseInput = userInput.toLowerCase();
                                    this.props.dispatch(fetchVisits(lowerCaseInput));
                                    this.handleClick();
                                }
                                }}>Submit</button>
                    </form>
                </div>
            );
        }
        if (this.props.loading === true) {
            return(
                <div className="form-container">
                <div className="loading-message">
                    Loading....
                </div>
            </div>
            );
        }
        if (this.state.display === 'results') {
            return(
                <div>
                    <button
                    className="switch-button"
                    type="submit" 
                    onClick={() => this.handleClick2()}
                    >Search again
                    </button>
                    <div className="results-list">
                        <p className="results-p">{this.props.visits.domain}</p>
                        <p className="results-p">{this.props.visits.rank}</p>
                        <button 
                        className="save-button"
                        type="submit"
                        onClick={() => this.handleSavedClick(this.props.visits.domain, this.props.visits.rank)}
                        >Save</button>
                    </div>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => ({
    visits: state.visits,
    saved: state.saved,
    loading: state.loading,
    error: state.error
});

export default connect (mapStateToProps)(Form);