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
            <div className = "details-banner"></div>
            <h1 className = "details-name">{props.person.name}</h1>
            <h3 className = "details-birthdate">{props.person.birthdate} ~</h3>
            <h3 className = "details-deathdate">{props.person.deathdate}</h3>
            <h1 className = "label">What Happened</h1>
            <p className = "details-details">{props.person.details}</p>
            {/* <p className = "details-age">{props.person.age}</p> */}
            <p className = "details-aftermath">{props.person.aftermath}</p>
        </div>
        </>
    )
}
