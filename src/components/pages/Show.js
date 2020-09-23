import React from 'react'
import '../../Show.css';
import { useParams } from 'react-router-dom'
import Person from '.././Person'

export default function ShowPage(props) {
    const { id } = useParams()
    const person = props.people.find(person => +person.id === +id)

    const loading = () => {
        if (person) {
            return <Person person = {person} />
        } else {
            return <p>Page is loading</p>
        }
    }
    return(
        <div>
            {loading()}
        </div>
    )
}