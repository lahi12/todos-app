import { useSelector } from "react-redux";

const useReminder = (props) => {
  const reminders = useSelector((state) => {
    return state.filter((todo) => {
      if (todo.scheduleInfo.isScheduled) {
        const today = new Date();
        const DATE = new Date(todo.scheduleInfo.date);
        return (
          DATE.getDate() === today.getDate() &&
          DATE.getMonth() === today.getMonth() &&
          DATE.getFullYear() === today.getFullYear()
        );
      }
      return false;
    });
  });

  return reminders;
};

export default useReminder;
