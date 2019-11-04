import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './CSS/index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Happy from './components/Happy';
import Sleepy from './components/Sleepy';
import Guilty from './components/Guilty';

// your code goes here
class Home extends Component{
  render(){
    return(
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/happy">Happy</Link>
              </li>
              <li>
                <Link to="/guilty">Guilty</Link>
              </li>
              <li>
                <Link to="/sleepy">Sleepy</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route exact path="/happy" component={Happy} />
            <Route exact path="/guilty" component={Guilty} />
            <Route exact path="/sleepy" component={Sleepy} />
          </Switch>
        </div>
      </Router>
    )
  }
}

ReactDOM.render( <Home />, document.getElementById('root') );
