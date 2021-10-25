import React from "react";
import TextInput from "./common/TextInput";
import PropTypes from "prop-types";

function StudentForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="name"
        label="Name"
        name="name"
        value={props.student.name}
        onChange={props.onChange}
        error={props.errors.name}
      />

      <TextInput
        id="email"
        label="Email"
        name="email"
        value={props.student.email}
        onChange={props.onChange}
        error={props.errors.email}
      />

      <TextInput
        label="Birth"
        id="birth"
        name="birth"
        value={props.student.birth}
        onChange={props.onChange}
        error={props.errors.birth}
      />
      {/* <button type="button" onClick={props.onSubmit}>
        Save
      </button>
      <button type="button" onClick={props.onDelete}>
        Delete
      </button> */}

      <input
        type="submit"
        value="Save"
        onClick={props.onSubmit}
        className="btn btn-primary"
      />
      <input
        type="submit"
        value="Delete"
        onClick={props.onDelete}
        className="btn btn-danger"
      />
    </form>
  );
}

StudentForm.propTypes = {
  student: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
};

export default StudentForm;
