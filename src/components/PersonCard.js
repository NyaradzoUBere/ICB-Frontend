import React from 'react'
import ShowPage from '../pages/Show'

export default function PersonCard(props) {
    const handleClick = () => {
        
       return <ShowPage person = {props.person}/>
    }
    return(
        <div className = "person-card">
            <img src= {props.person.image} alt = {props.person.name} className = "person-image" onClick = {handleClick}/>
            <h1>{props.person.name}</h1>
        </div>
    )
}