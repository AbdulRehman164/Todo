import updateTodosView from './todosView';
import { getProject } from './project';
import getSelectedProjectName from './selectedProject';

export default function deleteTodo() {
  const deleteButtons = document.querySelectorAll('.deleteButton');
  for (let i = 0; i < deleteButtons.length; i++) {
    deleteButtons[i].addEventListener('click', () => {
      getProject()[getSelectedProjectName()].getProjectTodos()[i].deleteTodo();
      updateTodosView(getSelectedProjectName());
      deleteTodo();
    });
  }
}
