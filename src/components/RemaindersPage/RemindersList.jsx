import { ListGroup } from "react-bootstrap";
import { MdSchedule } from "react-icons/md";
import TodoItem from "../Shared/TodoItem";

const RemindersList = ({ reminders }) => {
  return (
    <div className="m-4">
      <p className="text-info d-flex align-items-center">
        <MdSchedule className="mr-1" /> Tasks scheduled for Today
      </p>
      <ListGroup className="mt-3">
        {reminders.map((todo) => (
          <TodoItem todo={todo} key={todo.id} />
        ))}
      </ListGroup>
    </div>
  );
};

export default RemindersList;
