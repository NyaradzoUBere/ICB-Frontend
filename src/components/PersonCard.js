import React from 'react'

export default function PersonCard(props) {
    return(
        <>
        <h1>{props.person.name}</h1>
        <img src= {props.person.image} alt = {props.person.name} />
        </>
    )
}