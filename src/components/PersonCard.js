import React from 'react'
import ShowPage from './pages/Show'
import {Link} from 'react-router-dom'

export default function PersonCard(props) {

    return(
        <>
        <div className = "person-card">
            <img src= {props.person.image} alt = {props.person.name} className = "person-image"/>
            <h1>{props.person.name}</h1>
            <Link to='/show'>Go to show page</Link>
        </div>
        </>
    )
}