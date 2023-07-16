import { getTodos } from './todo';

const projectsObject = [];
export function createProject(name) {
  const proto = {
    getProjectTodos,
    getUndoneTodos,
  };
  projectsObject[name] = Object.assign(Object.create(proto), { name });
}

export function getProject() {
  return projectsObject;
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
