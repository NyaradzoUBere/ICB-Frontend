import React from 'react';
import './App.css';
import PersonCard from './components/PersonCard'
import Banner from './components/Banner'
import Home from './components/pages/Home'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends React.Component {

  render() {

    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path= '/'>
                <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
