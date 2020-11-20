import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Wildlife from './component/Wildlife';
import Place from './component/Place';
import Nature from './component/Nature';
import People from './component/People';

const routes=<BrowserRouter>
  <Switch>
    <Route exact path="/" component={App}/>
    <Route exact path="/portfolio/nature" component={Nature}/>
    <Route exact path="/portfolio/place" component={Place}/>
    <Route exact path="/portfolio/people" component={People}/>
    <Route exact path="/portfolio/wildlife" component={Wildlife}/>
  </Switch>
</BrowserRouter>

ReactDOM.render(
  routes,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
