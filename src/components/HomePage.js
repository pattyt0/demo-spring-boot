import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="jumbotron">
      <h1>Student manager</h1>
      <p>
        This application aims to track students in the university, so we can
        have a register of its birthdays 🙂
      </p>
      <Link to="/about" className="btn btn-primary">
        About
      </Link>
    </div>
  );
}

export default HomePage;
