import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "./home/HomePage";
import AboutPage from "./about/AboutPage";
import Header from "./common/Header";
import PageNotFound from "./404";
import CoursesPage from "./courses/CoursesPage";
import ManageCoursePage from "./courses/manageCoursePage";

function App() {
  return (
    <div className='container-fluid'>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/about' component={AboutPage} />
        <Route exact path='/courses' component={CoursesPage} />
        <Route exact path='/course/:slug' component={ManageCoursePage} />
        <Route exact path='/course' component={ManageCoursePage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
