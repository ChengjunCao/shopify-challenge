import React from 'react'
import './Results.css'
export default function Results(props) {
    return (
        <div className="Results">
            <div className="InnerDiv">
              <h4>Results for "{props.search}"</h4>
              {Array.isArray(props.results) ? (
                props.results.map((result, idx) => {
                  return (
                    <div key={idx}>
                      <ul>
                        <li>{result.Title} ({result.Year})
                          <button
                            onClick={()=>props.handleNominateClick(idx)}
                            disabled={props.disabled.includes(idx)}
                          >
                            Nominate
                          </button>
                        </li>
                      </ul>
                    </div>
                  )
                })) : (<h2>No Results</h2>)
              }
            </div>
        </div>
    )
}
