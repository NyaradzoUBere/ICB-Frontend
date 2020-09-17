import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {
    return (
        <div className = "home-nav-bar">
            <ul>
                <li>Check My Bias</li>
                <li>
                    <Link to = {"/news/now"}>In The News</Link>
                </li>
                <li>Profile</li>
            </ul>
        </div>
    )
}
