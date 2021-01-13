import useEditTodo from "../../hooks/useEditTodo";
import TodoForm from "./TodoForm";

const EditTodo = ({ todo, closeModal }) => {
  const { state, dispatch, edit_Todo } = useEditTodo(todo);
  const editTodo = () => {
    edit_Todo();
    closeModal();
  };
  return <TodoForm state={state} dispatch={dispatch} action={editTodo} />;
};

export default EditTodo;
