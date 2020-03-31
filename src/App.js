import React from 'react';
import Main from './component/Main';
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
            <Route exact path="/jayounglee" component={Main} />
            <Route path="/about" component={About} />
          <Footer/>
        </div>
      </BrowserRouter>
  );
}

export default App;
