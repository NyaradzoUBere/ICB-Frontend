import React from 'react'
import {Link} from 'react-router-dom'

export default function NavBar() {
    const responsiveNavBar = () => {
        let x = document.getElementById("my-nav-bar");
        if (x.className === "nav-bar") {
          x.className += "responsive";
        } else {
          x.className = "nav-bar";
        }
      }

    return (
        <div className = "nav-bar" id="my-nav-bar">
            <ul>
                <li>
                    <Link to ="/" className = "active">Home</Link>
                </li>
                <li>
                    <Link to ="/quiz/self">Check My Bias</Link>
                </li>
                <li>
                    <Link to ="/news/now">In The News</Link>
                </li>
                <li>
                    <a href="javascript:void(0);" class="icon" onClick={responsiveNavBar}>
                        <i class="fa fa-bars"></i>
                    </a>
                </li>
            </ul>
        </div>
    )
}
