import React, { useState, useEffect } from "react";
import { getStudents } from "../api/studentApi";
import StudentList from "./StudentList";
import { Link } from "react-router-dom";

function StudentsPage() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    getStudents().then((_students) => setStudents(_students));
  }, []);

  return (
    <>
      <h2>Students</h2>
      <Link to="/student" className="btn btn-primary">
        Add student
      </Link>
      <StudentList students={students} />
    </>
  );
}

export default StudentsPage;
