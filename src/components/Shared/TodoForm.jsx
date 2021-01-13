import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const TodoForm = ({ state, dispatch, action }) => {
  const { name, summary, scheduleInfo } = state;
  const [error, setError] = useState(false);
  const submit = () => {
    if (name.trim() === "" || summary.trim() === "") setError(true);
    else {
      setError(false);
      action();
    }
  };
  return (
    <Form className="m-4">
      {error ? (
        <h5 className="text-danger">Please fill all the fields</h5>
      ) : null}
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          placeholder="Enter to-do name"
          autoComplete="off"
          value={name}
          onChange={(e) => dispatch({ type: "name", payload: e.target.value })}
        />
      </Form.Group>
      <Form.Group controlId="summary">
        <Form.Label>Summary</Form.Label>
        <Form.Control
          as="textarea"
          rows={6}
          placeholder="Enter summary"
          value={summary}
          onChange={(e) =>
            dispatch({ type: "summary", payload: e.target.value })
          }
        />
      </Form.Group>
      <Form.Group controlId="check">
        <Form.Check
          type="checkbox"
          label="Schedule Todo"
          checked={scheduleInfo.isScheduled}
          onClick={() => dispatch({ type: "toggle" })}
        />
      </Form.Group>
      {scheduleInfo.isScheduled ? (
        <Form.Group controlId="date">
          <Form.Control
            type="date"
            placeholder="Pick date"
            value={scheduleInfo.date}
            onChange={(e) =>
              dispatch({ type: "schedule", payload: e.target.value })
            }
          />
        </Form.Group>
      ) : null}
      <Button variant="primary" onClick={submit}>
        {action.name === "createTodo" ? "Create" : "Update"} Todo
      </Button>
    </Form>
  );
};

export default TodoForm;
