import todoFunctionality from './todoFunctionality';
import getSelectedProjectName from './utilityModules/selectedProject';
import updateTodosView from './todosView';
import getPriority from './utilityModules/priority';
import updateProjectView from './projectView';

export default function renderView() {
  // rendering inital projects
  updateProjectView();

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
}
