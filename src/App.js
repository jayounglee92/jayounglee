import React from 'react';
import './App.css';
import { Main, Work, About } from 'pages';
import { Header, Footer } from 'component';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className='wrap'>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path='/work' component={Work} />
          <Route exact path='/' component={Main} />
          <Route exact path='/about' component={About} />
          <Redirect from='*' to='/' />
        </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
