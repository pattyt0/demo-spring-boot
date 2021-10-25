import { handleResponse, handleError } from "./apiUtils";
// const baseUrl = process.env.REACT_APP_API_URL + "/courses/";
const baseUrl = "http://localhost:8080/api/v1/students";

export function getStudents() {
  return fetch(baseUrl).then(handleResponse).catch(handleError);
}

export function getStudentBySlug(slug) {
  console.log("slug: " + slug);
  return fetch(baseUrl + "/" + slug)
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok.");
      return response.json().then((student) => {
        return student;
      });
    })
    .catch(handleError);
}

export function saveStudent(student) {
  var url = baseUrl + "/" + student.id;
  var action = "PUT";

  console.log("url: " + url);
  console.log("action: " + action);

  if (student.id !== null) {
    url = baseUrl + "/" + student.id;
    action = "PUT";
  } else {
    url = baseUrl;
    action = "POST";
  }

  return fetch(url, {
    method: action, // POST for create, PUT to update when id already exists.
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(student),
  })
    .then(handleResponse)
    .catch(handleError);
}

export function deleteStudent(student) {
  return fetch(baseUrl + "/" + student.id, { method: "DELETE" })
    .then(handleResponse)
    .catch(handleError);
}
