import React from 'react'
import './Banner.css'
export default function Banner(props) {
    return (
        <div className={props.hidden ? 'hidden' : 'banner'}>
          <h1>You have successfully nominated 5 movies, thank you!</h1>
        </div>
    )
}
