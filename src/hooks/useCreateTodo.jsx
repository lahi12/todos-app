import { useReducer } from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../redux/actions/TodosActions";
import FormInputReducer from "./FormInputReducer";

const useCreateTodo = () => {
  const dispatchTodo = useDispatch();
  const initialState = {
    name: "",
    summary: "",
    scheduleInfo: {
      isScheduled: false,
      date: new Date(),
    },
  };

  const [state, dispatch] = useReducer(FormInputReducer, initialState);

  const create_Todo = () => {
    dispatchTodo(createTodo(state));
  };

  return { state, dispatch, create_Todo };
};

export default useCreateTodo;
