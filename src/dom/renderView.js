import getSelectedProjectName from './utilityModules/selectedProject';
import updateProjectView from './projectView';
import addProject from './addProjects';
import updateProjectTodos from './updateProjectTodos';
import addTodo from './addTodo';

export default function renderView() {
  // rendering inital projects
  updateProjectView();

  // setting up the event listeners
  getSelectedProjectName();
  // getPriority();
  addProject();

  // Initial projects
  updateProjectTodos();

  addTodo();
}
