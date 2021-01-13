import { v4 as uuid } from "uuid";

export const createTodo = (todo) => {
  return {
    type: "create",
    payload: { ...todo, id: uuid(), completed: false },
  };
};

export const editTodo = (todo) => {
  return {
    type: "edit",
    payload: todo,
  };
};

export const toggleCompleteTodo = (id) => {
  return {
    type: "toggle_complete",
    payload: id,
  };
};

export const deleteTodo = (id) => {
  return {
    type: "delete",
    payload: id,
  };
};
