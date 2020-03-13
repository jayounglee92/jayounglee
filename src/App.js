import React from 'react';
// import Home from './component/Home';
import About from './component/About';
import Project from './component/Project';
import Contact from './component/Contact';
import Footer from './component/Footer';
import Header from './component/Header';

import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <div className="dep1-root">
          <div className="dep2-root">
            <Header/>
            <hr/>
            <Route exact path="/" component={About} />
            <Route path="/project" component={Project} />
            <Route path="/contact" component={Contact} />
            <hr/>
            <Footer/>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
