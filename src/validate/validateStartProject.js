export default function validateStartProject(values) {
  let errors = {};

  if (!values.title.trim()) {
    errors.title = "Title is required.";
  } else if (!/(?=.[A-Za-z]+)/.test(values.title)) {
    errors.title = "Title is not valid.";
  }

  if (!values.description.trim()) {
    errors.description = "Project Description is required.";
  }

  if (!values.requirementDescription.trim()) {
    errors.requirementDescription =
      "Project Requirement Description is required.";
  }

  return errors;
}
