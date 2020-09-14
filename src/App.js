import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard'
import Banner from './components/Banner'


const peopleURL = "http://localhost:3000/people"

class App extends React.Component {
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

export default App;
