import actionTypes from '../actions/actionTypes';

export default function todosReducer(todos:any = [], action:any) {
  let newTodoList = todos;
  switch (action.type) {
    case actionTypes.ADD_TODO:
      newTodoList = [...newTodoList, action.todo];
      break;

    case actionTypes.DELETE_TODO:
      newTodoList = newTodoList.filter((todo:any, index:any) => index !== action.index);
      break;

    case actionTypes.CLEAR_ALL:
      newTodoList = [];
      break;

    case actionTypes.UPDATE_TODO:
      newTodoList = newTodoList.map((todo:any, index:any) => ((index === action.index)
        ? {
          ...todo,
          done: !todo.done,
        }
        : todo));
      break;

    default:
      break;
  }
  return newTodoList;
}
