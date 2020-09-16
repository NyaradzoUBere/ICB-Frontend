import React from 'react';
import './App.css';
import Home from './components/pages/Home'
import Banner from './components/Banner'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends React.Component {

  render() {

    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
