import { MdSchedule, MdDone, MdClear } from "react-icons/md";

const TodoStatus = ({ scheduleInfo, completed }) => {
  const { isScheduled, date } = scheduleInfo;
  const isToday = () => {
    const today = new Date();
    const DATE = new Date(date);
    if (
      DATE.getMonth() === today.getMonth() &&
      DATE.getFullYear() === today.getFullYear()
    ) {
      return DATE.getDate() - today.getDate();
    } else {
      if (
        DATE.getMonth() - today.getMonth() < 0 ||
        DATE.getFullYear() - today.getFullYear() < 0
      )
        return -1;
    }
  };
  const getScheduledDate = () => {
    if (isToday() === 0) return "Scheduled Today";
    else if (isToday() === 1) return "Scheduled Tomorrow";
    else if (isToday() < 0)
      return `Schedule expired on ${new Date(date).toDateString()}`;
    return `Scheduled to ${new Date(date).toDateString()}`;
  };
  return (
    <div className="d-flex align-items-center flex-wrap">
      {completed ? (
        <span className="text-success">
          <MdDone /> <small>completed</small>
        </span>
      ) : (
        <span className="text-danger">
          <MdClear /> <small>not completed</small>
        </span>
      )}
      {isScheduled ? (
        <h5 className="m-1 ml-2">
          <span
            className={`badge badge-pill badge-${
              isToday() < 0 ? "danger" : "warning"
            }`}
          >
            <MdSchedule /> <small>{getScheduledDate()}</small>
          </span>
        </h5>
      ) : null}
    </div>
  );
};

export default TodoStatus;
