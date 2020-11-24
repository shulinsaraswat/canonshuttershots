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

const routes=<Router basename="/canonshuttershots">
  <Switch>
    <Route exact path='/' component={App}/>
    <Route exact path='/nature' component={Nature}/>
    <Route exact path='/place' component={Place}/>
    <Route exact path='/people' component={People}/>
    <Route exact path='/wildlife' component={Wildlife}/>
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
