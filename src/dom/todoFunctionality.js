import updateTodosView from './todosView';
import { getProject } from '../logic/project';
import getSelectedProjectName from './utilityModules/selectedProject';
import isValid from './utilityModules/validity';

export default function todoFunctionality() {
  deleteTodo();
  editTodo();
  details();
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
// eslint-disable-next-line consistent-return
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
  dateInput.value = todo.dueDate;
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

function details() {
  const main = document.querySelector('main');
  const detailsButtons = document.querySelectorAll('.detailsButton');
  const blur = document.querySelector('.blur');
  for (let i = 0; i < detailsButtons.length; i++) {
    detailsButtons[i].addEventListener('click', () => {
      main.appendChild(showDetails(i));
      blur.style.display = 'block';
      closeDetails();
    });
  }
}

function showDetails(index) {
  const todo = getProject()[getSelectedProjectName()].getProjectTodos()[index];

  const section = document.createElement('section');
  section.classList.add('detailsSection');

  const table = document.createElement('table');
  table.classList.add('detailsTable');

  const thead = document.createElement('thead');
  const caption = document.createElement('caption');
  caption.textContent = 'Details';

  const closeButton = document.createElement('button');
  closeButton.classList.add('closeDetailsButton');
  closeButton.textContent = 'X';

  thead.append(caption, closeButton);

  const tbody = document.createElement('tbody');

  const title = createTableRow('Title ', `${todo.title}`);

  const dueDate = createTableRow('Date ', `${todo.dueDate}`);

  const description = createTableRow('Details ', `${todo.description}`);

  const priority = createTableRow('Priority ', `${todo.priority}`);

  tbody.append(title, dueDate, description, priority);

  table.append(thead, tbody);

  section.append(table);

  return section;
}

function createTableRow(head, body) {
  const tr = document.createElement('tr');
  const th = document.createElement('th');
  const td = document.createElement('td');

  th.textContent = head;
  td.textContent = body;

  tr.append(th, td);

  return tr;
}

function closeDetails() {
  const closeButton = document.querySelector('.closeDetailsButton');
  closeButton.addEventListener('click', () => {
    document.querySelector('.blur').style.display = 'none';
    document.querySelector('.detailsSection').remove();
  });
}
