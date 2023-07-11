import todoFunctionality from './todoFunctionality';
import { getProject } from './project';
import getSelectedProjectName from './selectedProject';
import updateTodosView from './todosView';
import getPriority from './priority';

export default function updateProjectView() {
  (function updateProject() {
    const projects = getProject();
    const projectsSection = document.querySelector('.projectsSection');

    Object.keys(projects).forEach((prop) => {
      const projectDiv = document.createElement('div');
      projectDiv.classList.add('project');
      projectDiv.textContent = projects[prop].name;
      projectsSection.appendChild(projectDiv);
    });
  })();

  (function renderProjectTodos() {
    // setting up the event listeners
    getSelectedProjectName();
    getPriority();

    const projectDivs = document.querySelectorAll('.project');
    const todosSection = document.querySelector('.todos');

    // initial Rendering
    if (todosSection.textContent === '')
      updateTodosView(projectDivs[0].textContent);
    todoFunctionality();

    projectDivs.forEach((projectDiv) => {
      projectDiv.addEventListener('click', () => {
        updateTodosView(getSelectedProjectName());
        todoFunctionality();
      });
    });
  })();
}
