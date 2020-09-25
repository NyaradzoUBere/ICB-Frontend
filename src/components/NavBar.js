import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {
    return (
        <div className = "nav-bar">
            {/* <img className = "icb-logo" src = "/Users/Nyaradzo/Documents/flatiron_school/5Mod/final_project/iscb_frontend/iscb/src/components/logo_size.jpg" alt = "I Can't Breathe logo"/> */}
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
