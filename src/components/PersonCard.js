import React from 'react'

export default function PersonCard(props) {
    return(
        <div className = "person-card">
            <img src= {props.person.image} alt = {props.person.name} className = "person-image"/>
            <h1>{props.person.name}</h1>
        </div>
    )
}