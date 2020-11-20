import React, {Component} from 'react';
import './App.css';
import Scroll from '../src/component/BackTopButton';
import Main from '../src/component/Main';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
    AOS.init({
      offset:200,
      duration:800
    });
  return (
    <div>
        {/* <Loader/> */}
        <Main/>   
        <Scroll showBelow={250} />
      </div>
  );
}

export default App;
