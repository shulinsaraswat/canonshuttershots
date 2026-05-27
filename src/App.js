import React, {useEffect} from 'react';
import './App.css';
import Main from '../src/component/Main';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      offset: 160,
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <div>
      <Main/>   
    </div>
  );
}

export default App;
