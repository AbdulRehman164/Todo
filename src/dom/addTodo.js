import { createTodo } from '../logic/todo';
import todoFunctionality from './todoFunctionality';
import updateTodosView from './todosView';
import getPriority from './utilityModules/priority';
import getSelectedProjectName from './utilityModules/selectedProject';

export default function addTodo() {
  const addTodoButton = document.querySelector('.add');
  const todoInputs = document.querySelector('.todoInputs');
  const submitTodoButton = document.querySelector('.submit');
  addTodoButton.addEventListener('click', () => {
    todoInputs.style.display = 'block';
    submitTodoButton.style.display = 'block';
    submitTodoButton.addEventListener('click', submit);
  });
}

function submit() {
  const titleInput = document.querySelector('#titleInput');
  const dateInput = document.querySelector('#dateInput');
  const descriptionInput = document.querySelector('#descriptionInput');

  const isValid =
    dateInput.checkValidity() &&
    titleInput.checkValidity() &&
    descriptionInput.checkValidity();
  if (!isValid) {
    dateInput.reportValidity();
    titleInput.reportValidity();
    descriptionInput.reportValidity();
  } else {
    const todo = {
      title: titleInput.value,
      dueDate: dateInput.value,
      description: descriptionInput.value,
      priority: getPriority(),
      isChecked: false,
    };
    createTodo(todo, getSelectedProjectName());
    document.querySelector('.todoInputs').style.display = 'none';
    updateTodosView(getSelectedProjectName());
    todoFunctionality();

    titleInput.value = '';
    dateInput.value = '';
    descriptionInput.value = '';
  }
}
