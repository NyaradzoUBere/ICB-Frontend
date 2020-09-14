import React from 'react';
import PersonCard from '.././PersonCard'
import Banner from '.././Banner'
import ShowPage from './Show';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


const peopleURL = "http://localhost:3000/people"

class Home extends React.Component {
state = {
people: []
}

componentDidMount(){
fetch(peopleURL)
    .then(response => response.json())
    .then(people => this.setState({people}))
}

showPeople = () => {
return this.state.people.map(person => {
    return <PersonCard person = {person} />
})
}

render() {

return (
    <div className="App">
        <Banner />
        <div className = "people">
            {this.showPeople()}
        </div>
    </div>
);
}
}

export default Home;