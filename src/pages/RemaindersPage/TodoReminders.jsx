import "./TodoReminders.css";
import { useHistory } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import useReminder from "../../hooks/useReminder";
import NoReminders from "../../components/RemaindersPage/NoReminders";
import RemindersList from "../../components/RemaindersPage/RemindersList";

const TodoReminders = () => {
  const reminders = useReminder();
  const history = useHistory();
  return (
    <div className="reminders-page m-4">
      <div
        className="go-back d-flex align-items-center"
        onClick={() => history.goBack()}
      >
        <MdArrowBack size={20} />
        <span className="ml-2">Go back</span>
      </div>
      {reminders.length === 0 ? (
        <NoReminders />
      ) : (
        <RemindersList reminders={reminders} />
      )}
    </div>
  );
};

export default TodoReminders;
