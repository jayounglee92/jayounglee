import React from 'react';
import Home from './component/Home';
import Work from './component/Work';
import About from './component/About';
import Footer from './component/Footer';
import Header from './component/Header';

import './App.css';

import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
        <div className="dep1-root">
          <Header/>
            <Route path="/work" component={Work} />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          <Footer/>
        </div>
      </BrowserRouter>
  );
}

export default App;
