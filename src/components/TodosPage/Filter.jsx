import { Form } from "react-bootstrap";

const Filter = ({ selectFilter }) => {
  return (
    <Form.Control className="filter" as="select" onChange={selectFilter}>
      <option>All</option>
      <option>Completed</option>
      <option>Incomplete</option>
      <option>Scheduled</option>
      <option>Unscheduled</option>
    </Form.Control>
  );
};

export default Filter;
