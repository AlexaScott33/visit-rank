import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchVisits } from '../actions/visits';

import './Form.css';

class Form extends Component {
    render() {
        console.log(this.props);
        console.log(this.state);
        return(
            <div className="form-container">
                <form>
                    <label htmlFor="searchInput">Search</label>
                    <input 
                        type="text" 
                        name="searchInput" 
                        placeholder="e.g. amazon.com">
                    </input>
                    <button 
                        type="submit" 
                        onClick={(e) => {
                            e.preventDefault()
                            console.log('clicking')
                            this.props.dispatch(fetchVisits());
                            }}>Submit</button>
                </form>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    visits: state.visits
});

export default connect (mapStateToProps)(Form);