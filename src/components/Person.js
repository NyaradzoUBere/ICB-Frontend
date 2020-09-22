import React from 'react'
import {Link} from 'react-router-dom'

export default function Person(props) {
    const goToHome = () => {
        if (props.person) {
            return <Link to = {"/"}>Home</Link>
        } else {
            return <p>Page Loading...</p>
        }
    }

    return (
        <>
        <div className = "nav-bar">
            <ul>
                <li className = "home-link">
                    {goToHome()}
                </li>
            </ul>
        </div>
        <div className = "details">
            <div className = "name-dates">
                <h1 className = "details-name">{props.person.name}</h1>
                <h3 className = "details-birthdate">{props.person.birthdate} ~</h3>
                <h3 className = "details-deathdate">{props.person.deathdate}</h3>
            </div>
            <div className = "details-banner"></div>
            <div className = "what-happened-aftermath">
                <div className = "what-happened">
                    <h1 className = "what-happened-label">What Happened</h1>
                    <p className = "details-details">{props.person.details}</p>
                </div>
                {/* <p className = "details-age">{props.person.age}</p> */}
                <div className = "aftermath">
                    <h1 className = "aftermath-label">The Aftermath</h1>
                    <p className = "details-aftermath">{props.person.aftermath}</p>
                </div>
            </div>
        </div>
        </>
    )
}
