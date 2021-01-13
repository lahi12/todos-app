import { MdNotificationsOff } from "react-icons/md";

const NoReminders = () => {
  return (
    <div className="no-reminders">
      <MdNotificationsOff size={200} color="lightgrey" />
      <span>No reminders</span>
    </div>
  );
};

export default NoReminders;
