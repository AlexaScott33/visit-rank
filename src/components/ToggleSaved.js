import React, { Component } from 'react';

class ToggleSaved extends Component {
    render() {
        return(
            <div>
                <button
                onClick={() => console.log('need to toggle')}>Check out your saved searches!</button>
            </div>
        );
    }
}

export default ToggleSaved;
