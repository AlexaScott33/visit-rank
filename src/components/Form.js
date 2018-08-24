import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVisits } from '../actions/visits';

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
    render() {
        // console.log(this.props);
        console.log(this.state);
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
                                    alert('Please enter in valid domain');
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
                    className="search-button"
                    type="submit" 
                    onClick={() => this.handleClick2()}
                    >Search again
                    </button>
                    <ul className="results-list">
                        <li>{this.props.visits.domain}</li>
                        <li>{this.props.visits.rank}</li>
                    </ul>
                </div>
            );
        }
    }
}

const mapStateToProps = (state) => ({
    visits: state.visits,
    loading: state.loading,
    error: state.error
});

export default connect (mapStateToProps)(Form);