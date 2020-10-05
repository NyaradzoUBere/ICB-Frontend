import React from 'react';
import PersonCard from '.././PersonCard'
import Banner from '../HomeBanner'
import NavBar from '.././NavBar'
import Footer from '.././Footer'
import ShowPage from './Show';
import News from './News';
import QuizPage from './QuizPage'
import Resources from './Resources'
import Movies from './Movies'
import TVShows from './TVShows'
import Books from './Books'
import Podcasts from './Podcasts'
import {BrowserRouter as Router, Route, Switch, BrowserRouter} from 'react-router-dom'


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
        <Route exact path='/'>
            <Banner />
            <div className="people">
                {this.showPeople()}
            </div>
        </Route>
        <Route exact path="/:id" render = {props => <ShowPage {...props} people = {this.state.people}/>}/>
        <Route exact path="/news/now" component = {News} />
        <Route exact path="/quiz/self" component = {QuizPage} />
        <Route exact path="/resources/explore" component = {Resources} />
        <Route exact path="/resources/movies" component = {Movies} />
        <Route exact path="/resources/tvshows" component = {TVShows} />
        <Route exact path="/resources/books" component = {Books} />
        <Route exact path="/resources/podcasts" component = {Podcasts} />
    </Switch>
    <Footer />
    </>
);
}
}

export default Home;