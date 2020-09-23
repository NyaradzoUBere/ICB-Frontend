import React from 'react';
import PersonCard from '.././PersonCard'
import Banner from '../HomeBanner'
import NavBar from '.././NavBar'
import ShowPage from './Show';
import News from './News';
import QuizPage from './QuizPage'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


const peopleURL = "https://i-cant-breathe.herokuapp.com/people"

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
    return <PersonCard person = {person} key={person.id} />
})
}

render() {

return (
    <>
    <NavBar />
    <Switch>
        <Router>
            <Route exact path='/'>
                <Banner />
                <div className="people">
                    {this.showPeople()}
                </div>
            </Route>
            <Route exact path="/:id" render = {props => <ShowPage {...props} people = {this.state.people}/>}/>
            <Route exact path="/news/now" component = {News} />
            <Route exact path="/quiz/self" component = {QuizPage} />
            
        </Router>
    </Switch>
    </>
);
}
}

export default Home;