import { useReducer } from "react";
import { useDispatch } from "react-redux";
import { editTodo } from "../redux/actions/TodosActions";
import FormInputReducer from "./FormInputReducer";

const useEditTodo = (todo) => {
  const dispatchTodo = useDispatch();
  const initialState = todo;

  const [state, dispatch] = useReducer(FormInputReducer, initialState);

  const edit_Todo = () => {
    dispatchTodo(editTodo(state));
  };

  return { state, dispatch, edit_Todo };
};

export default useEditTodo;
