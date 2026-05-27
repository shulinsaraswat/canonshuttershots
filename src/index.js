import React from 'react';
import { createRoot } from 'react-dom/client';
import {HashRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import './index.css';
import App from './App';
import Main from './component/Main';
import reportWebVitals from './reportWebVitals';
import Nature from './component/Nature';

const routes=<Router>
  <Routes>
    <Route path='/' element={<App><Main /></App>}/>
    <Route path='/nature' element={<App><Nature /></App>}/>
    <Route path='*' element={<Navigate to='/' replace />}/>
  </Routes>
</Router>

createRoot(document.getElementById('root')).render(routes);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
