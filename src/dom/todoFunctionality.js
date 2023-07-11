import updateTodosView from './todosView';
import { getProject } from '../logic/project';
import getSelectedProjectName from './utilityModules/selectedProject';
import getPriority from './utilityModules/priority';

// every action that is going to happen on a todo
export default function todoFunctionality() {
  deleteTodo();
  editTodo();
}

function deleteTodo() {
  const deleteButtons = document.querySelectorAll('.deleteButton');
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', () => {
      getProject()[getSelectedProjectName()].getProjectTodos()[i].deleteTodo();
      updateTodosView(getSelectedProjectName());
      todoFunctionality();
    });
  }
}

function editTodo() {
  const editButtons = document.querySelectorAll('.editButton');
  const todosInput = document.querySelector('.todoInputs');
  const updateTodoButton = document.querySelector('.updateTodo');
  for (let i = 0; i < editButtons.length; i++) {
    editButtons[i].addEventListener('click', () => {
      todosInput.style.display = 'block';
      updateTodoButton.style.display = 'block';
      renderPreviousValues(i);
      updateTodoButton.addEventListener('click', () => {
        todosInput.style.display = 'none';
        getProject()
          [getSelectedProjectName()].getProjectTodos()
          [i].edit(getData());
        updateTodosView(getSelectedProjectName());
        todoFunctionality();
      });
    });
  }
}

function getData() {
  const titleInput = document.querySelector('#titleInput');
  const dateInput = document.querySelector('#dateInput');
  const descriptionInput = document.querySelector('#descriptionInput');
  return {
    title: titleInput.value,
    dueDate: dateInput.value,
    description: descriptionInput.value,
    priority: getPriority(),
  };
}

function renderPreviousValues(index) {
  const todo = getProject()[getSelectedProjectName()].getProjectTodos()[index];
  const titleInput = document.querySelector('#titleInput');
  const dateInput = document.querySelector('#dateInput');
  const descriptionInput = document.querySelector('#descriptionInput');

  titleInput.value = todo.title;
  dateInput.value = todo.dateInput;
  descriptionInput.value = todo.description;
}
