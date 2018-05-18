import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import Register from './Components/Register';
import Login from './Components/Login';
import Jokes from './Components/Jokes';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={Register} />
        <Route exact path="/signin" component={Login} />
        <Route exact path="/jokes" component={Jokes} />
      </div>
    );
  }
}

export default App;
