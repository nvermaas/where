/**
 * Created by Vermaas on 10/8/2017.
 */
import React from 'react';
import './SearchInput.css';
import PropTypes from 'prop-types';

class SearchInput extends React.Component {
    handleChange = (event) => {
        this.props.changeSearchText(event);
    }

    render() {
        return (
            <div className="component-search-input">
                <div><h4>Search Person : </h4>
                    <input
                        onChange={this.handleChange}
                    />
                </div>
            </div>
        );
    }
}
SearchInput.propTypes = {
    changeSearchText: PropTypes.func,
};
export default SearchInput;