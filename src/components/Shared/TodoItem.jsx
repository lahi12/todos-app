import { useState } from "react";
import { ListGroup } from "react-bootstrap";
import TodoStatus from "./TodoStatus";
import TodoOptions from "./TodoOptions";

const TodoItem = ({ todo }) => {
  const [showEditModal, setEditModal] = useState(false);
  return (
    <ListGroup.Item className="todo-item">
      <div className="d-flex flex-column">
        <span className="todo-item-name">{todo.name}</span>
        <TodoStatus
          completed={todo.completed}
          scheduleInfo={todo.scheduleInfo}
        />
      </div>
      <TodoOptions
        show={showEditModal}
        todo={todo}
        editModal={() => setEditModal(true)}
        closeModal={() => setEditModal(false)}
      />
    </ListGroup.Item>
  );
};

export default TodoItem;
