let priority = 'low';
export default function getPriority() {
  const low = document.querySelector('#low');
  const medium = document.querySelector('#medium');
  const high = document.querySelector('#high');

  low.addEventListener('click', () => {
    priority = 'low';
  });
  medium.addEventListener('click', () => {
    priority = 'medium';
  });
  high.addEventListener('click', () => {
    priority = 'high';
  });
  return priority;
}
