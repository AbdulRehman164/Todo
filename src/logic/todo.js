/* eslint-disable no-param-reassign */
const todosArray =
  localStorage.getItem('todosArray') !== null
    ? JSON.parse(localStorage.getItem('todosArray'))
    : [];

// CREATING TODOS
export function createTodo(data, project) {
  const todo = {
    id: getId(),
    title: data.title,
    description: data.description,
    dueDate: data.dueDate,
    priority: data.priority,
    isChecked: data.isChecked,
    project,
  };

  let shouldReturn = false;
  todosArray.forEach((arrayTodo) => {
    if (arrayTodo.title === todo.title) shouldReturn = true;
  });
  if (shouldReturn === true) return;

  todosArray.push(todo);
  localStorage.setItem('todosArray', JSON.stringify(todosArray));
}

// GETTING TODOS
export function getTodos() {
  const todos =
    localStorage.getItem('todosArray') !== null
      ? JSON.parse(localStorage.getItem('todosArray'))
      : todosArray;
  todos.forEach((todo) => {
    todo.deleteTodo = deleteTodo;
    todo.edit = edit;
    todo.checkTodo = checkTodo;
  });
  return todos;
}

// BEHAVIOURS

function deleteTodo() {
  todosArray.splice(getIndex(this), 1);
  localStorage.setItem('todosArray', JSON.stringify(todosArray));
}

function edit(data) {
  const index = getIndex(this);
  todosArray[index] = Object.assign(todosArray[index], data);
  localStorage.setItem('todosArray', JSON.stringify(todosArray));
}

function checkTodo(condition) {
  const index = getIndex(this);
  todosArray[index].isChecked = condition;
  localStorage.setItem('todosArray', JSON.stringify(todosArray));
}

// utility funcitons

function getId() {
  const id = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
  Object.keys(todosArray).forEach((prop) => {
    if (id === todosArray[prop]) getId();
  });
  return id;
}

function getIndex(currentObj) {
  for (let i = 0; i < todosArray.length; i++) {
    if (todosArray[i].id === currentObj.id) return i;
  }
  return undefined;
}
