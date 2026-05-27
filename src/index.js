import React from 'react';
import { createRoot } from 'react-dom/client';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Wildlife from './component/Wildlife';
import Place from './component/Place';
import Nature from './component/Nature';
import People from './component/People';

const routes=<Router basename="/canonshuttershots">
  <Routes>
    <Route path='/' element={<App />}/>
    <Route path='/nature' element={<Nature />}/>
    <Route path='/place' element={<Place />}/>
    <Route path='/people' element={<People />}/>
    <Route path='/wildlife' element={<Wildlife />}/>
  </Routes>
</Router>

createRoot(document.getElementById('root')).render(routes);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
