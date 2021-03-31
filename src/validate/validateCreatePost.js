export default function validateEditProfile(values) {
  let errors = {};

  if (!values.description.trim()) {
    errors.description = "Description is required.";
  }

  return errors;
}
