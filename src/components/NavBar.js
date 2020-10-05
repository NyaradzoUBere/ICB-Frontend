import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {

    return (
        <div className = "nav-bar" id="my-nav-bar">
            <ul>
                <li>
                    <Link to ="/" className = "active">Home</Link>
                </li>
                {/* <li>
                    <Link to ="/quiz/self">Check My Bias</Link>
                </li> */}
                <li>
                    <Link to ="/news/now">In The News</Link>
                </li>
                <li>
                    <Link to ="/resources/explore">Resources</Link>
                </li>
            </ul>
        </div>
    )
}
