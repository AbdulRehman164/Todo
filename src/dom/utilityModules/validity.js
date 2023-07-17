export default function isValid() {
  const titleInput = document.querySelector('#titleInput');
  const dateInput = document.querySelector('#dateInput');
  const descriptionInput = document.querySelector('#descriptionInput');
  const priorityInput = document.querySelector('#medium');

  const isvalid =
    priorityInput.checkValidity() &&
    dateInput.checkValidity() &&
    titleInput.checkValidity() &&
    descriptionInput.checkValidity();
  if (!isvalid) {
    dateInput.reportValidity();
    titleInput.reportValidity();
    descriptionInput.reportValidity();
    priorityInput.reportValidity();
    return false;
  }
  return true;
}
