import React, { Component } from 'react';

import './Form.css';

class Form extends Component {
    render() {
        return(
            <div className="form-container">
                <form>
                    <label htmlFor="searchInput">Search</label>
                    <input type="text" name="searchInput" placeholder="e.g. amazon.com"></input>
                </form>
            </div>
        );
    }
}

export default Form;