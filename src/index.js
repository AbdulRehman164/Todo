import { createProject } from './logic/project';
import renderView from './dom/renderView';
import { createTodo } from './logic/todo';

const dataArray = [
  {
    title: 'Math Assignment',
    description: 'Complete Math Assignment',
    dueDate: '2023-08-15',
    priority: 'medium',
    isChecked: false,
  },
  {
    title: 'Research Paper',
    description: 'Write a Research Paper',
    dueDate: '2023-09-30',
    priority: 'high',
    isChecked: false,
  },
  {
    title: 'Presentation Slides',
    description: 'Prepare Presentation Slides',
    dueDate: '2023-10-25',
    priority: 'high',
    isChecked: false,
  },
  {
    title: 'Biology Test',
    description: 'Study for Biology Test',
    dueDate: '2023-11-17',
    priority: 'medium',
    isChecked: false,
  },
  {
    title: 'Novel Reading',
    description: 'Read Chapter 7 of the Novel',
    dueDate: '2023-12-03',
    priority: 'low',
    isChecked: false,
  },
  {
    title: 'Coding Project',
    description: 'Finish Coding Project',
    dueDate: '2023-12-15',
    priority: 'high',
    isChecked: false,
  },
  {
    title: 'Guitar Practice',
    description: 'Practice Guitar Chords',
    dueDate: '2023-12-22',
    priority: 'low',
    isChecked: false,
  },
  {
    title: 'Spanish Test',
    description: 'Prepare for Spanish Speaking Test',
    dueDate: '2023-11-29',
    priority: 'medium',
    isChecked: false,
  },
  {
    title: 'Room Cleaning',
    description: 'Clean and Organize Room',
    dueDate: '2023-10-10',
    priority: 'low',
    isChecked: false,
  },
  {
    title: 'Job Application',
    description: 'Submit Job Application',
    dueDate: '2023-09-05',
    priority: 'high',
    isChecked: false,
  },
];

// Create todos with project type 'Inbox' for each data object in the array
dataArray.map((data) => createTodo(data, 'Inbox'));

createProject('Inbox');
createProject('Chores');
renderView();
