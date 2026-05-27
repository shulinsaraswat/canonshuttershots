import React, {useEffect, useState} from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Scroll from './component/BackTopButton';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App({ children }) {
  const [theme, setTheme] = useState(() => localStorage.getItem('canon-theme') || 'dark');

  useEffect(() => {
    AOS.init({
      offset: 160,
      duration: 800,
      once: true,
    });
  }, []);

  useEffect(() => {
    localStorage.setItem('canon-theme', theme);
    document.body.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => currentTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="site-shell" data-theme={theme}>
      <Scroll showBelow={250} />
      <Navbar theme={theme} onToggleTheme={toggleTheme}/>
      {children}
      <Footer/>
    </div>
  );
}

export default App;
