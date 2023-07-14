import updateTodosView from './todosView';
import { getProject } from '../logic/project';
import getSelectedProjectName from './utilityModules/selectedProject';
import isValid from './utilityModules/validity';

export default function todoFunctionality() {
  deleteTodo();
  editTodo();
  isCompleted();
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

  for (let i = 0; i < editButtons.length; i++) {
    editButtons[i].addEventListener('click', () => {
      const todoId =
        getProject()[getSelectedProjectName()].getProjectTodos()[i].id;
      const updateTodoButton = document.querySelector(
        `.updateTodo[data-id="${todoId}"]`
      );

      document.querySelector('.blur').style.display = 'block';
      todosInput.style.display = 'block';
      updateTodoButton.style.display = 'block';
      document.querySelector('.submitTodo').style.display = 'none';

      const todo = getProject()[getSelectedProjectName()].getProjectTodos()[i];
      renderPreviousValues(i);

      updateTodoButton.addEventListener('click', () => {
        if (isValid()) {
          document.querySelector('.blur').style.display = 'none';
          todosInput.style.display = 'none';
          updateTodoButton.style.display = 'none';
        }

        todo.edit(getData());
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
  if (isValid()) {
    const priority = document.querySelector('input[name = "priority"]:checked');
    return {
      title: titleInput.value,
      dueDate: dateInput.value,
      description: descriptionInput.value,
      priority: priority.value,
    };
  }
}

function renderPreviousValues(index) {
  const todo = getProject()[getSelectedProjectName()].getProjectTodos()[index];
  const titleInput = document.querySelector('#titleInput');
  const dateInput = document.querySelector('#dateInput');
  const descriptionInput = document.querySelector('#descriptionInput');

  const value = todo.priority;
  const priorityInput = document.querySelector(`input[value="${value}"]`);

  priorityInput.checked = true;

  titleInput.value = todo.title;
  dateInput.value = todo.dateInput;
  descriptionInput.value = todo.description;
}

function isCompleted() {
  const checkboxes = document.querySelectorAll('input[type = "checkbox"]');
  for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('change', () => {
      getProject()[getSelectedProjectName()].getProjectTodos()[i].isChecked =
        checkboxes[i].checked;
    });
  }
}
