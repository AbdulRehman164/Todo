import { createProject } from './logic/project';
import renderView from './dom/renderView';
import { createTodo } from './logic/todo';

const data = {
  title: 'Do HomeWork',
  description:
    'Do HomeWork do this do that lorem ipusm this that what the  is going on what the  is this',
  dueDate: '2023-12-12',
  priority: 'low',
  isChecked: false,
};
createTodo(data, 'Inbox');
createTodo(data, 'Inbox');
createTodo(data, 'Inbox');
createTodo(data, 'Inbox');
createProject('Inbox');
createProject('Chores');
renderView();
