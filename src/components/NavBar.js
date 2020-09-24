import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {
    return (
        <div className = "nav-bar">
            <ul>
                <li>
                    <Link to ="/">Home</Link>
                </li>
                <li>
                    <Link to ="/quiz/self">Check My Bias</Link>
                </li>
                <li>
                    <Link to ="/news/now">In The News</Link>
                </li>
                <li>Profile</li>
            </ul>
        </div>
    )
}
