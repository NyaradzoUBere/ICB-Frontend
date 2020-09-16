import React from 'react'

export default function Person(props) {
    return (
        <div className = "details">
            <div className = "details-banner"></div>
            <h1 className = "details-name">{props.person.name}</h1>
            <h3 className = "details-birthdate">{props.person.birthdate}</h3>
            <h3 className = "details-deathdate">{props.person.deathdate}</h3>
            <p className = "details-details">{props.person.details}</p>
            <p className = "details-aftermath">{props.person.aftermath}</p>
        </div>
    )
}
