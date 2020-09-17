import React from 'react';
import PersonCard from '.././PersonCard'
import Banner from '../HomeBanner'
import NavBar from '.././NavBar'
import ShowPage from './Show';
import News from './News';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'


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
    <Switch>
        <Router>
            <Route exact path= '/'>
                <NavBar />
                <Banner />
                <div className = "people">
                    {this.showPeople()}
                </div>
            </Route>
            <Route exact path = "/:id" render = {props => <ShowPage {...props} people = {this.state.people}/>}/>
            <Route exact path= "/news/now" component = {News} />
            
        </Router>
    </Switch>
);
}
}

export default Home;