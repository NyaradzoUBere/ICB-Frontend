import React from 'react';
import './App.css';
import Home from './components/pages/Home'


class App extends React.Component {

  componentDidMount() {
    document.title = "I Can't Breathe";
  }

  render() {

    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
