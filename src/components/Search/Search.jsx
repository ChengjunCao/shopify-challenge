import React from 'react'
import './Search.css'
export default function Search(props) {
    return (
        <div className="Search">
            <div className="InnerDiv">
                <h4>Movie title</h4>
                <input
                    style={{width: '100%'}}
                    name="search" 
                    value={props.search}
                    placeholder='Search...'
                    onChange={props.handleChange}
                />
            </div>
        </div>
    )
}
