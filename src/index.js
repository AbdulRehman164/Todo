import { createTodo } from './logic/todo';
import { createProject } from './logic/project';
import updateProjectView from './dom/projectView';

const data = {
  title: 'Inbox',
  description: 'dis',
  dueDate: 'date',
  priority: 'p',
  isChecked: false,
};

const data2 = {
  title: 'Project1',
  description: 'dis',
  dueDate: 'date',
  priority: 'p',
  isChecked: true,
};
createTodo(data, 'Inbox');
createTodo(data, 'Inbox');

createProject('Inbox');
createProject('Project1');
createTodo(data2, 'Project1');
createTodo(data2, 'Project1');
updateProjectView();
