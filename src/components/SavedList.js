import React, { Component } from 'react';
import { connect } from 'react-redux';

import './SavedList.css';

class SavedList extends Component {

    render() {
        console.log(this.props.saved);
        if (this.props.saved.length === 0) {
            return(
                <div>
                    <p>There are no items in your saved searches</p>
                </div>
            );
        }
        if (this.props.saved.length > 0) {
            // let setId = this.props
            let renderSavedList = this.props.saved.map((site, id) => (
                <li key={id}>Domain: {site.domain}
                    Rank:{site.rank}
                </li>
            ));
            console.log(renderSavedList);
            return(
                <div>
                    <ul>
                        {renderSavedList}
                    </ul>
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

export default connect(mapStateToProps)(SavedList);