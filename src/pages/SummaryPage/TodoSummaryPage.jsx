import "./TodoSummaryPage.css";
import { Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {
  MdArrowBack,
  MdInfoOutline,
  MdCheck,
  MdClose,
  MdDelete,
} from "react-icons/md";
import {
  deleteTodo,
  toggleCompleteTodo,
} from "../../redux/actions/TodosActions";
import TodoStatus from "../../components/Shared/TodoStatus";

const TodoSummaryPage = () => {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const todo = useSelector((state) => {
    const data = state.find((todo) => todo.id === id);
    if (data === undefined) {
      history.replace("/todos");
      return;
    }
    return { ...data };
  });
  return (
    <div className="summary-page m-4">
      <div
        className="go-back d-flex align-items-center"
        onClick={() => history.goBack()}
      >
        <MdArrowBack size={20} />
        <span className="ml-2">Go back</span>
      </div>
      <p className="title">{todo.name}</p>
      <div className="m-3">
        <TodoStatus
          completed={todo.completed}
          scheduleInfo={todo.scheduleInfo}
        />
      </div>
      <div className="todo-options mb-3 ml-3">
        <Button
          variant={todo.completed ? "danger" : "success"}
          onClick={() => dispatch(toggleCompleteTodo(todo.id))}
          size="sm"
        >
          {todo.completed ? <MdClose /> : <MdCheck />}
          mark as {todo.completed ? "incomplete" : "completed"}
        </Button>
        <Button
          size="sm"
          variant="light"
          className="ml-4"
          onClick={() => dispatch(deleteTodo(todo.id))}
        >
          <MdDelete color="red" size={20} />
        </Button>
      </div>
      <div className="bg-light p-4">
        <p className="summary">
          <MdInfoOutline />
          <span className="ml-2">summary of the task</span>
        </p>
        <p>{todo.summary}</p>
      </div>
    </div>
  );
};

export default TodoSummaryPage;
