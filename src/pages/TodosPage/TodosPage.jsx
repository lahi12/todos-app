import './TodosPage.css';
import { useState } from "react";
import { useSelector } from "react-redux";
import TodoModal from "../../components/Shared/TodoModal";
import NoTodos from "../../components/TodosPage/NoTodos";
import TodosList from "../../components/TodosPage/TodosList";
import CreateTodo from "../../components/TodosPage/CreateTodo";

const TodosPage = () => {
  const todos = useSelector((state) => state);
  const [show, setShow] = useState(false);
  return (
    <>
      <TodoModal
        show={show}
        closeModal={() => setShow(false)}
        Component={CreateTodo}
      />
      {todos.length === 0 ? (
        <NoTodos showModal={() => setShow(true)} />
      ) : (
        <TodosList todos={todos} showModal={() => setShow(true)} />
      )}
    </>
  );
};

export default TodosPage;
