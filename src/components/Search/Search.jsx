import React from 'react';
import './Search.css';
import SearchIcon from '../../search-icon.svg';

export default function Search(props) {
    return (
        <div className="Search">
            <div className="InnerDiv">
                <h4>Movie title</h4>
                <div className="SearchBar">
                    <input
                        style={{width: '95%', height: 23}}
                        name="search" 
                        value={props.search}
                        placeholder="Search..."
                        onChange={props.handleChange}
                    />
                    <img src={SearchIcon} alt="search-icon" />
                </div>
               
            </div>
        </div>
    )
}
