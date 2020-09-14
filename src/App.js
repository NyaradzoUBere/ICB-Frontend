import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard'

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

  render() {

    return (
      <div className="App">
  
      </div>
    );
  }
}

export default App;
