import React from 'react';
import './SearchBox.css';
function SearchBox() {
    return (
        <div className="wrap">
            <div className="search">
                <input type="text" className="searchTerm" placeholder="solve your polynomial equation here!!" />
                <button type="submit" className="searchButton">
                    <i className="fa fa-search"></i>
                </button>
            </div>
        </div>
    );
}

export default SearchBox;

