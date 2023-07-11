import { getProject } from '../logic/project';

export default function updateTodosView(projectName) {
  const todosSection = document.querySelector('.todos');
  todosSection.textContent = '';

  const todos = getProject()[projectName].getProjectTodos();
  todos.forEach((todo) => {
    todosSection.appendChild(createTodoView(todo));
  });
}

function createTodoView(todo) {
  const todoDiv = document.createElement('div');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = todo.isChecked;

  const titleDiv = document.createElement('div');
  titleDiv.textContent = todo.title;
  titleDiv.classList.add('titleDiv');

  const descriptionDiv = document.createElement('div');
  descriptionDiv.textContent = todo.description;
  descriptionDiv.classList.add('descriptionDiv');

  const dueDateDiv = document.createElement('div');
  dueDateDiv.textContent = todo.dueDate;
  dueDateDiv.classList.add('dueDateDiv');

  const priorityDiv = document.createElement('div');
  priorityDiv.textContent = todo.priority;
  priorityDiv.classList.add('priorityDiv');

  const editButton = document.createElement('button');
  editButton.textContent = 'Edit';
  editButton.classList.add('editButton');

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.classList.add('deleteButton');

  todoDiv.append(
    checkbox,
    titleDiv,
    descriptionDiv,
    dueDateDiv,
    priorityDiv,
    editButton,
    deleteButton
  );
  return todoDiv;
}