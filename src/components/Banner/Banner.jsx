import React from 'react'
import './Banner.css'
export default function Banner(props) {
    return (
        <div className={props.hidden ? 'hidden' : 'banner'}>
          You have successfully nominated 5 movies, thank you!
        </div>
    )
}
