import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVisits } from '../actions/visits';

import './Form.css';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
    }

    handleChange(e) {
        this.setState({
            input: e.target.value
        });
    }
    render() {
        console.log(this.props.visits);
        console.log(this.state);
        return(
            <div className="form-container">
                <form>
                    <label htmlFor="searchInput">Search</label>
                    <input 
                        type="text" 
                        name="searchInput" 
                        placeholder="e.g. amazon.com"
                        onChange={(e) => {
                            this.handleChange(e);
                        }}>
                    </input>
                    <button 
                        type="submit" 
                        onClick={(e) => {
                            e.preventDefault(); 
                            if (this.state.input === '') {
                                alert('Please enter in valid domain');
                            }
                            this.props.dispatch(fetchVisits(this.state.input));
                            }}>Submit</button>
                </form>
                <ul>
                    <li>{this.props.visits.domain}</li>
                    <li>{this.props.visits.rank}</li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    visits: state.visits
});

export default connect (mapStateToProps)(Form);