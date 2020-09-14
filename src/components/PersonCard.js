import React from 'react'
// import ShowPage from '../pages/Show'
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

export default function PersonCard(props) {
    // const handleClick = () => {
    //     return <ShowPage person = {props.person}/>
    // }
    return(
        <div className = "person-card">
            <img src= {props.person.image} alt = {props.person.name} className = "person-image"/>
            <h1>{props.person.name}</h1>
        </div>
    )
}