import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Provider } from "react-redux";

import Create from './components/create.component';
import Edit from './components/edit.component';
import Index from './components/index.component';
import Home from './components/home.component';

import store from "./store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link to={'/'} className="navbar-brand">Create Salad</Link>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link to={'/'} className="nav-link">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/create/fruit'} className="nav-link">Create Fruit</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/create/vegetable'} className="nav-link">Create Vegetable</Link>
                  </li>
                  <li className="nav-item">
                    <Link to={'/index'} className="nav-link">List</Link>
                  </li>
                </ul>
              </div>
            </nav> <br />
            <h2 className="text-center">
              Make your own salad
              <small className="text-muted"> - with veg and salad</small>
            </h2>
            <br />
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/create/fruit' render={() => <Create type={'fruit'} />} />
              <Route path='/create/vegetable' render={() => <Create type={'vegetable'} />} />
              <Route path='/edit/:id' component={Edit} />
              <Route path='/index' component={Index} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;