import React from 'react'
import { Link } from 'react-router-dom'

export default function Person(props) {

    return (
        <>
        {window.scrollTo(0, 0)}
        <div className = "details">
            <div className = "name-dates">
                <h1 className = "details-name">{props.person.name}</h1>
                {props.person.birthdate ? (
                    <h3 className = "details-birthdate">{props.person.birthdate} — {props.person.deathdate}</h3>
                ): (<h3 className = "details-birthdate">Died {props.person.deathdate}</h3>)}
            </div>
            <div className = "details-banner">
                <p className = "details-short-description">The events surrounding {props.person.name} occured in {props.person.location}. {props.person.name} was {props.person.age} years old.</p>
            </div>
            <div className = "what-happened-aftermath">
                <div className = "what-happened">
                    <h1 className = "what-happened-label">What Happened</h1>
                    <p className = "details-details">{props.person.details}</p>
                </div>
                <div className = "aftermath">
                    <h1 className = "aftermath-label">The Aftermath</h1>
                    <p className = "details-aftermath">{props.person.aftermath}</p>
                </div>
            </div>
            <div className = "check-bias-banner">
                <p className = "check-bias-text">We all have bias.</p>
                <Link className = "bias-link" to = '/resources/explore'>Unlearn Yours</Link>
            </div>
        </div>
        </>
    )
}
