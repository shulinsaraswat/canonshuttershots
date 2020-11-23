import React, {useState,useEffect} from 'react';
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

  const [isLoading, setLoading] = useState(true);

  function fakeRequest() {
    return new Promise(resolve => setTimeout(() => resolve(), 2500));
  }
  useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();
        setLoading(!isLoading);
      }
    });
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <div>
        {/* <Loader/> */}
        <Main/>   
        <Scroll showBelow={250} />
      </div>
  );
}

export default App;
