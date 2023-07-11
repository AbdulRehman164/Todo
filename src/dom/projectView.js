import { getProject } from '../logic/project';

export default function updateProjectView() {
  const projects = getProject();
  const projectsSection = document.querySelector('.projectsSection');

  projectsSection.textContent = '';

  Object.keys(projects).forEach((prop) => {
    const projectDiv = document.createElement('div');
    projectDiv.classList.add('project');
    projectDiv.textContent = projects[prop].name;
    projectsSection.appendChild(projectDiv);
  });
}
