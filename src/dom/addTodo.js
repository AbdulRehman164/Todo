import { createTodo } from '../logic/todo';
import updateProjectView from './projectView';
import todoFunctionality from './todoFunctionality';
import updateTodosView from './todosView';
import getSelectedProjectName from './utilityModules/selectedProject';
import isValid from './utilityModules/validity';

export default function addTodo() {
  const addTodoButton = document.querySelector('.addTodo');
  const todoInputs = document.querySelector('.todoInputs');
  const cancelButton = document.querySelector('.cancelTodoButton');
  const submitTodoButton = document.querySelector('.submitTodo');

  addTodoButton.addEventListener('click', () => {
    todoInputs.style.display = 'block';
    submitTodoButton.style.display = 'block';
    document.querySelector('.blur').style.display = 'block';
    document.querySelector('.updateTodo').style.display = 'none';
    resetForm();
    submitTodoButton.addEventListener('click', submit);
  });

  cancelButton.addEventListener('click', cancel);
}

function cancel() {
  resetForm();
  document.querySelector('.todoInputs').style.display = 'none';
  document.querySelector('.blur').style.display = 'none';
  document.querySelectorAll('.updateTodo').forEach((button) => {
    const updateButton = button;
    updateButton.style.display = 'none';
  });
}

function submit() {
  const titleInput = document.querySelector('#titleInput');
  const dateInput = document.querySelector('#dateInput');
  const descriptionInput = document.querySelector('#descriptionInput');

  if (isValid()) {
    const priority = document.querySelector('input[name="priority"]:checked');
    document.querySelector('.blur').style.display = 'none';
    const todo = {
      title: titleInput.value,
      dueDate: dateInput.value,
      description: descriptionInput.value,
      priority: priority.value,
      isChecked: false,
    };
    createTodo(todo, getSelectedProjectName());
    document.querySelector('.todoInputs').style.display = 'none';
    updateTodosView(getSelectedProjectName());
    todoFunctionality();
    updateProjectView();
  }
}

function resetForm() {
  const titleInput = document.querySelector('#titleInput');
  const dateInput = document.querySelector('#dateInput');
  const descriptionInput = document.querySelector('#descriptionInput');
  const low = document.querySelector('#low');
  const medium = document.querySelector('#medium');
  const high = document.querySelector('#high');

  low.checked = false;
  medium.checked = false;
  high.checked = false;
  titleInput.value = '';
  dateInput.value = '';
  descriptionInput.value = '';
}
