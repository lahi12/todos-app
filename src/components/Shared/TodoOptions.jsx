import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CgChevronRightO } from "react-icons/cg";
import { MdEdit, MdDelete } from "react-icons/md";
import { IoCheckmarkCircle, IoCloseCircle } from "react-icons/io5";
import { deleteTodo, toggleCompleteTodo } from "../../redux/actions/TodosActions";
import EditTodo from "./EditTodo";
import TodoModal from "./TodoModal";

const TodoOptions = ({ todo, show, editModal, closeModal }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="options">
        {todo.completed ? (
          <IoCloseCircle
            size={20}
            title="mark as incomplete"
            className="incomplete"
            onClick={() => dispatch(toggleCompleteTodo(todo.id))}
          />
        ) : (
          <IoCheckmarkCircle
            size={20}
            title="mark as complete"
            className="complete"
            onClick={() => dispatch(toggleCompleteTodo(todo.id))}
          />
        )}
        <MdEdit
          size={20}
          title="edit"
          className="ml-2 edit"
          onClick={editModal}
        />
        <MdDelete
          size={20}
          className="ml-2 mr-2 delete"
          title="delete"
          onClick={() => dispatch(deleteTodo(todo.id))}
        />
        <Link to={`/todos/${todo.id}`}>
          <CgChevronRightO
            className="view"
            size={20}
            title="click to view summary"
          />
        </Link>
      </div>
      <TodoModal
        show={show}
        closeModal={closeModal}
        Component={EditTodo}
        data={todo}
      />
    </>
  );
};

export default TodoOptions;
