import React, { useState, useEffect } from "react";
// import { Prompt } from "react-router";
import StudentForm from "./StudentForm";
import * as studentApi from "../api/studentApi";
import { toast } from "react-toastify";

const ManageStudentPage = (props) => {
  // Array destructuring
  const [errors, setErrors] = useState({});
  const [student, setStudent] = useState({
    id: null,
    slug: "",
    name: "",
    email: "",
    birth: "",
  });

  useEffect(() => {
    const slug = props.match.params.slug;
    if (slug) {
      studentApi
        .getStudentBySlug(slug)
        .then((_student) => setStudent(_student));
    }
  }, [props.match.params.slug]); // important to declare dependency array

  function handleChange({ target }) {
    setStudent({
      ...student,
      [target.name]: target.value, // computed property
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!formIsValid()) return;
    studentApi.saveStudent(student).then(() => {
      props.history.push("/students");
      toast.success("Student saved");
    });
  }

  function handleDelete(event) {
    event.preventDefault();

    studentApi.deleteStudent(student).then(() => {
      props.history.push("/students");
      toast.error("Student deleted");
    });
  }

  function formIsValid() {
    const _errors = {};

    if (!student.name) _errors.name = "Name is required";
    if (!student.email) _errors.email = "Email is required";
    if (!student.birth) _errors.birth = "Birth day date is required";

    setErrors(_errors);
    //form is valid if object Errors is empty
    return Object.keys(_errors).length === 0;
  }

  return (
    <>
      <h2>Manage Student</h2>
      {/* <Prompt when={true} message="Are you sure you want to leave?" /> */}
      {/* {props.match.params.slug} */}
      <StudentForm
        errors={errors}
        student={student}
        onChange={handleChange}
        onSubmit={handleSubmit}
        onDelete={handleDelete}
      />
    </>
  );
};

export default ManageStudentPage;
