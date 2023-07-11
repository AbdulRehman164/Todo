import { createProject } from '../logic/project';
import updateProjectView from './projectView';
import updateProjectTodos from './updateProjectTodos';
import getSelectedProjectName from './utilityModules/selectedProject';

export default function addProject() {
  const addProjectButton = document.querySelector('.addProjectButton');
  const projectInputDiv = document.querySelector('.projectInputDiv');
  const submitProjectButton = document.querySelector('.submitProjectButton');
  addProjectButton.addEventListener('click', () => {
    projectInputDiv.style.display = 'block';
    submitProjectButton.addEventListener('click', () => {
      projectInputDiv.style.display = 'none';
      const projectInput = document.querySelector('.projectInput');
      createProject(projectInput.value);

      updateProjectView();

      // setting event listeners
      getSelectedProjectName();
      updateProjectTodos();
    });
  });
}
