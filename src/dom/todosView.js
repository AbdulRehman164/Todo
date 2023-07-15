import { getProject } from '../logic/project';
import editImage from '../../dist/img/edit.png';
import deleteImage from '../../dist/img/delete.png';

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
  todoDiv.classList.add('todo');

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.checked = todo.isChecked;

  const titleDiv = document.createElement('div');
  titleDiv.textContent = todo.title;
  titleDiv.classList.add('titleDiv');

  const detailsButton = document.createElement('button');
  detailsButton.textContent = 'Details';
  detailsButton.classList.add('detailsButton');

  const dueDateDiv = document.createElement('div');
  dueDateDiv.textContent = getDate(todo);
  dueDateDiv.classList.add('dueDateDiv');

  const editButton = document.createElement('button');
  const editButtonImage = new Image();
  editButtonImage.src = editImage;
  editButtonImage.classList.add('editButtonImage');
  editButton.appendChild(editButtonImage);
  editButton.classList.add('editButton');

  const deleteButton = document.createElement('button');
  const deleteButtonImage = new Image();
  deleteButtonImage.src = deleteImage;
  deleteButtonImage.classList.add('deleteButtonImage');
  deleteButton.appendChild(deleteButtonImage);
  deleteButton.classList.add('deleteButton');

  createUpdateButton(todo);

  todoDiv.append(
    checkbox,
    titleDiv,
    detailsButton,
    dueDateDiv,
    editButton,
    deleteButton
  );
  return todoDiv;
}

function getDate(todo) {
  const date = todo.dueDate;
  const dateArray = date.split('-');
  const monthNumber = dateArray[1] - 1;
  const month = new Date(0, monthNumber).toLocaleString('en-US', {
    month: 'short',
  });

  return `${month}-${dateArray[2]}`;
}

function createUpdateButton(todo) {
  const todoInputsSubmitButtonsPara = document.querySelector(
    '.todoInputsSubmitButtons'
  );
  const updateButton = document.createElement('button');
  updateButton.classList.add('submit', 'updateTodo');
  updateButton.textContent = 'Update';
  updateButton.dataset.id = todo.id;
  updateButton.style.display = 'none';

  todoInputsSubmitButtonsPara.appendChild(updateButton);
}
