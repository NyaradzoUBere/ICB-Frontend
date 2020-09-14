import React from 'react';
import './App.css';
import Home from './components/pages/Home'
import Show from './components/pages/Show'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import ShowPage from './components/pages/Show';

class App extends React.Component {

  render() {

    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path= '/'>
                <Home />
            </Route>
            {/* <Route exact path= "/show" component = {Show} /> */}
            <Route path = '/show' render={(props) => <ShowPage {...props} />} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
