import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function StudentList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Birth</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {props.students.map((student) => {
          return (
            <tr key={student.id}>
              <td>
                <Link to={"/student/" + student.id}>{student.name}</Link>
              </td>
              <td>{student.email}</td>
              <td>{student.birth}</td>
              <td>{student.age}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

StudentList.propTypes = {
  students: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      birth: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default StudentList;
