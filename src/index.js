import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Wildlife from './component/Wildlife';
import Place from './component/Place';
import Nature from './component/Nature';
import People from './component/People';

const routes=<Router>
  <Switch>
    <Route exact path='/canonshuttershots/' component={App}/>
    <Route exact path='/canonshuttershots/portfolio/nature' component={Nature}/>
    <Route exact path='/canonshuttershots/portfolio/place' component={Place}/>
    <Route exact path='/canonshuttershots/portfolio/people' component={People}/>
    <Route exact path='/canonshuttershots/portfolio/wildlife' component={Wildlife}/>
  </Switch>
</Router>

ReactDOM.render(
  routes,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
