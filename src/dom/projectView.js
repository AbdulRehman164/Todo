import { getProject } from '../logic/project';

export default function updateProjectView() {
  const projects = getProject();
  const projectsSection = document.querySelector('.projectsSection');

  projectsSection.textContent = '';

  Object.keys(projects).forEach((prop) => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');
    const projectNamePara = document.createElement('p');
    projectNamePara.classList.add('projectNamePara');
    projectNamePara.textContent = projects[prop].name;

    const undoneTodosPara = document.createElement('p');
    undoneTodosPara.classList.add('undoneTodosPara');
    undoneTodosPara.textContent = projects[prop].getUndoneTodos();

    projectDiv.append(projectNamePara, undoneTodosPara);
    if (projects[prop].getUndoneTodos() === 0) {
      undoneTodosPara.remove();
    }

    projectsSection.appendChild(projectDiv);
  });
}
