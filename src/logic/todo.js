const todosArray = [];

// CREATING TODOS
export function createTodo(data, project) {
  const proto = {
    deleteTodo,
    edit,
    project,
  };
  const todo = {
    id: getId(),
    title: data.title,
    description: data.description,
    dueDate: data.dueDate,
    priority: data.priority,
    isChecked: data.isChecked,
  };
  todosArray.push(Object.assign(Object.create(proto), todo));
}

// GETTING TODOS
export function getTodos() {
  return todosArray;
}

// BEHAVIOURS

function deleteTodo() {
  todosArray.splice(todosArray.indexOf(this), 1);
}

function edit(data) {
  const index = todosArray.indexOf(this);
  todosArray[index] = Object.assign(todosArray[index], data);
}

function getId() {
  const id = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
  Object.keys(todosArray).forEach((prop) => {
    if (id === todosArray[prop]) getId();
  });
  return id;
}
