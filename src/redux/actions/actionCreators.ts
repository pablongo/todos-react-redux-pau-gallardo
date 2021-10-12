import actionTypes from './actionTypes';

export function createNewTodo(todo:string) {
  const newTodo = {
    text: todo,
    done: false,
  };
  return ({
    type: actionTypes.ADD_TODO,
    todo: newTodo,
  });
}

export function deleteTodo(index:number) {
  return ({
    type: actionTypes.DELETE_TODO,
    index,
  });
}

export function clearAll() {
  return ({
    type: actionTypes.CLEAR_ALL,
  });
}

export function updateTodo(index:number) {
  return ({
    type: actionTypes.UPDATE_TODO,
    index,
  });
}
