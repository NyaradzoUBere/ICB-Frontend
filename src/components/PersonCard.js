import React from 'react'
import {Link} from 'react-router-dom'

export default function PersonCard(props) {

    return(
        <>
        <div className = "person-card">
            <Link to={`/${props.person.id}`}><img src= {props.person.image} alt = {props.person.name} className = "person-image"/></Link>
            <h1>{props.person.name}</h1>

        </div>
        </>
    )
}