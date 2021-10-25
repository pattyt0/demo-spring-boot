import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import StudentsPage from "./StudentsPage";
import { Route, Switch, Redirect } from "react-router-dom";
import NotFoundPage from "./NotFoundPage";
import ManageStudentPage from "./ManageStudentPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="container-fluid">
      {/* 3 seconds */}
      <ToastContainer autoClose={3000} hideProgressBar />
      <Header />
      <Switch>
        {/* order matters */}
        <Route path="/" exact component={HomePage} />
        <Route path="/students" component={StudentsPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/student/:slug" component={ManageStudentPage} />
        <Route path="/student" component={ManageStudentPage} />

        {/* useful when you change URL all the time */}
        <Redirect from="/about-page" to="/about" />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
