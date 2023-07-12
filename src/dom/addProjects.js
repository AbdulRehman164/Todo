import { createProject } from '../logic/project';
import updateProjectView from './projectView';
import updateProjectTodos from './updateProjectTodos';
import getSelectedProjectName from './utilityModules/selectedProject';

export default function addProject() {
  const addProjectButton = document.querySelector('.addProjectButton');
  const projectInputDiv = document.querySelector('.projectInputDiv');
  const submitProjectButton = document.querySelector('.submitProjectButton');
  const cancelButton = document.querySelector('.cancelProjectInput');

  addProjectButton.addEventListener('click', () => {
    addProjectButton.style.display = 'none';
    projectInputDiv.style.display = 'block';

    submitProjectButton.addEventListener('click', submit);

    cancelButton.addEventListener('click', reset);
  });
}

function submit() {
  const projectInput = document.querySelector('.projectInput');

  const isValid = projectInput.checkValidity();
  if (!isValid) projectInput.reportValidity();
  else {
    createProject(projectInput.value);

    reset();

    updateProjectView();

    // setting event listeners
    getSelectedProjectName();
    updateProjectTodos();
  }
}

function reset() {
  document.querySelector('.addProjectButton').style.display = 'block';
  document.querySelector('.projectInputDiv').style.display = 'none';
  document.querySelector('.projectInput').value = '';
}
