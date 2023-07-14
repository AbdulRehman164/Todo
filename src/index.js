import { createTodo } from './logic/todo';
import { createProject } from './logic/project';
import renderView from './dom/renderView';

const data = {
  title: 'Do HomeWork',
  description:
    'Do HomeWork do this do that lorem ipusm this that what the  is going on what the  is this',
  dueDate: '2023/12/12',
  priority: 'low',
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
renderView();
