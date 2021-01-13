import { useState } from "react";
import { Badge, Button, ListGroup } from "react-bootstrap";
import { MdNotifications } from "react-icons/md";
import { Link } from "react-router-dom";
import useReminder from "../../hooks/useReminder";
import Filter from "./Filter";
import TodoItem from "../Shared/TodoItem";

const TodosList = ({ todos, showModal }) => {
  const noOfReminders = useReminder().length;
  const [filter, setFilter] = useState("All");
  const filterTodos = () => {
    if (filter === "All") return todos;
    else {
      switch (filter) {
        case "Completed":
          return todos.filter((todo) => todo.completed);
        case "Incomplete":
          return todos.filter((todo) => !todo.completed);
        case "Scheduled":
          return todos.filter((todo) => todo.scheduleInfo.isScheduled);
        case "Unscheduled":
          return todos.filter((todo) => !todo.scheduleInfo.isScheduled);
        default:
          return todos;
      }
    }
  };
  return (
    <div className="todos-list">
      <div className="ml-4 mt-4 d-flex align-items-center flex-wrap">
        <Button onClick={showModal}>+ Create Todo</Button>
        <Button
          as={Link}
          to="/reminders"
          variant="light"
          className="ml-3 text-primary d-flex align-items-center"
        >
          <MdNotifications />
          <div>
            Reminders
            <Badge className="m-1" variant="primary">
              {noOfReminders !== 0 ? noOfReminders : null}
            </Badge>
          </div>
        </Button>
        <Filter selectFilter={(event) => setFilter(event.target.value)} />
      </div>
      {filterTodos().length !== 0 ? (
        <>
          <div className="ml-4 text-muted">
            <small className="pc">
              Hover over any to-do item to view options
            </small>
            <small className="mobile">
              Click any to-do item to view options
            </small>
          </div>
          <ListGroup className="list m-4 ml-0">
            {filterTodos().map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}
          </ListGroup>
        </>
      ) : (
        <p className="m-3 text-center text-muted">
          No To-Do<small>s</small>
        </p>
      )}
    </div>
  );
};

export default TodosList;
