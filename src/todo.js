const todosArray = [];

// CREATING TODOS
export function createTodo(data, project) {
  const proto = {
    project,
  };
  const todo = {
    title: data.title,
    description: data.description,
    dueDate: data.dueDate,
    priority: data.priority,
    isChecked: data.isChecked,
  };
  todosArray.push(Object.assign(Object.create(proto), todo));
}

// GETTING TODOS
export function todos() {
  const proto = {
    deleteTodo,
    edit,
  };
  return Object.assign(Object.create(proto), todosArray);
}

// BEHAVIOURS

function deleteTodo(index) {
  todosArray.splice(index, 1);
}

function edit(data, index) {
  todosArray[index] = Object.assign(todosArray[index], data);
}
