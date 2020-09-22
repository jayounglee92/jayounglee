import React from "react";
import Main from "routes/Main";
import Work from "routes/Work";
import About from "routes/About";
import Header from "component/Header";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
/**
 * Component : AppRouter
 * Date : 2020-09-15
 * Funtion :  라우터
 * Writer : JayoungLee(jylee@mobidays.com)
 */
const AppRouter = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/work" component={Work} />
        <Route exact path="/" component={Main} />
        <Route exact path="/about" component={About} />
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
