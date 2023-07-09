let selectedProjectName = 'Inbox';
export default function getSelectedProjectName() {
  const projectDivs = document.querySelectorAll('.project');
  projectDivs.forEach((projectDiv) => {
    projectDiv.addEventListener('click', () => {
      selectedProjectName = projectDiv.textContent;
    });
  });
  return selectedProjectName;
}
