import updateTodosView from './todosView';
import getSelectedProjectName from './utilityModules/selectedProject';
import todoFunctionality from './todoFunctionality';

export default function updateProjectTodos() {
  const projectDivs = document.querySelectorAll('.project');
  const todosSection = document.querySelector('.todos');

  // initial Rendering
  if (todosSection.textContent === '')
    updateTodosView(projectDivs[0].textContent);
  todoFunctionality();

  projectDivs.forEach((projectDiv) => {
    projectDiv.addEventListener('click', () => {
      console.log(getSelectedProjectName());
      updateTodosView(getSelectedProjectName());
      todoFunctionality();
    });
  });
}