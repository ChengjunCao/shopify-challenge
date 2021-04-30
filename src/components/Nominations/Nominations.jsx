import React from 'react'
import './Nominations.css'
export default function Nominations(props) {
    return (
        <div className="Nominations">
            <div className="InnerDiv">
              <h4>Nominations</h4>
              {Array.isArray(props.nominations) ? (
                props.nominations.map((nomination, idx) => {
                  return (
                    <div key={idx}>
                        <ul>
                            <li>{nomination.Title} ({nomination.Year})
                                <button
                                onClick={() => props.handleRemoveClick(idx)}
                                >
                                Remove
                                </button>
                            </li>
                        </ul>
                    </div>
                  )
                })) : (<h2>No Nominations</h2>)
              }
            </div>
        </div>
    )
}
