import React, { useEffect, useState, useLayoutEffect } from 'react';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyles';
import Dropdown from './components/Dropdown';
import Footer from './components/Footer';
import { Switch, Route, useLocation } from 'react-router-dom';
import Home from './pages/index';
import About from './pages/About';
import Homes from './pages/Homes';
import Rentals from './pages/Rentals';
import Contact from './pages/Contact';
import Detail from './pages/Detail';
import Aos from 'aos';
import 'aos/dist/aos.css';



function App() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    Aos.init({});
  }, []);

  useLayoutEffect(() => {
    window.scrollTo(0,0);
  }, [location.pathname]);

  return (
    <>
        <GlobalStyle />
        <Navbar toggle={toggle} />
        <Dropdown isOpen={isOpen} toggle={toggle} />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' exact component={About} />
          <Route path='/homes' exact component={Homes} />
          <Route path='/rentals' exact component={Rentals} />
          <Route path='/contact' exact component={Contact} />
          <Route path='/detail' exact component={Detail} />
        </Switch>
        <Footer />

    </>
  );
}

export default App;
