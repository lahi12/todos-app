import useCreateTodo from "../../hooks/useCreateTodo";
import TodoForm from "../Shared/TodoForm";

const CreateTodo = ({ closeModal }) => {
  const { state, dispatch, create_Todo } = useCreateTodo();
  const createTodo = () => {
    create_Todo();
    closeModal();
  };
  return <TodoForm state={state} dispatch={dispatch} action={createTodo} />;
};

export default CreateTodo;
