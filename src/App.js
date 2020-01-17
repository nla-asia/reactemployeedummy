import React, { Component } from 'react';
import { BrowserRouter as Router, Route , Switch,
  Redirect } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './containers/Home/Home';
import Submit from './containers/Submit/Submit';
import Show from './containers/Show/Show';
import Edit from './containers/Edit/Edit';
import NotFound from './containers/NotFound/NotFound';


class App extends Component {
  render() {
    return (
      <div className="container App">
        <Header/>
        <div className="App-main">
          <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/submit" component={Submit} />
            <Route path="/edit/:id" component={Edit} />
            <Route path="/employee/:id" component={Show} />
            <Route component={NotFound} />
          </Switch>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
}

export default App;
