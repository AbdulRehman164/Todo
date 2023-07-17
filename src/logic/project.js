import { getTodos } from './todo';

const projectsObject =
  localStorage.getItem('projectsObject') !== null
    ? JSON.parse(localStorage.getItem('projectsObject'))
    : {};

export function createProject(name) {
  let shouldReturn = false;
  Object.keys(projectsObject).forEach((prop) => {
    if (projectsObject[prop].name === name) shouldReturn = true;
  });

  if (shouldReturn === true) return;
  projectsObject[name] = { name };
  localStorage.setItem('projectsObject', JSON.stringify(projectsObject));
}

export function getProject() {
  const projects =
    localStorage.getItem('projectsObject') !== null
      ? JSON.parse(localStorage.getItem('projectsObject'))
      : projectsObject;

  Object.keys(projects).forEach((prop) => {
    projects[prop].getProjectTodos = getProjectTodos;
    projects[prop].getUndoneTodos = getUndoneTodos;
  });

  return projects;
}

function getProjectTodos() {
  const projectTodosArray = [];
  getTodos().forEach((todo) => {
    if (todo.project === this.name) {
      projectTodosArray.push(todo);
    }
  });
  return projectTodosArray;
}

function getUndoneTodos() {
  let number = 0;
  const todos = this.getProjectTodos();
  todos.forEach((todo) => {
    if (todo.isChecked === false) {
      number++;
    }
  });
  return number;
}
