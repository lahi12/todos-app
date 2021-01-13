import { Button } from "react-bootstrap";
import { RiTodoLine } from "react-icons/ri";

const NoTodos = ({ showModal }) => {
  return (
    <div className="no-todos-container">
      <RiTodoLine size={200} color="lightgrey" className="no-todos-icon" />
      <p className="no-todos text-secondary">
        No To-Do<small>s</small>
      </p>
      <Button variant="light" className="text-primary" onClick={showModal}>
        + create todo
      </Button>
    </div>
  );
};

export default NoTodos;
