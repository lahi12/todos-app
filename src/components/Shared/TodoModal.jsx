import { Button, Modal } from "react-bootstrap";

const TodoModal = ({ show, closeModal, Component, data = null }) => {
  return (
    <Modal show={show} onHide={closeModal}>
      <Component closeModal={closeModal} todo={data} />
      <Button variant="danger" onClick={closeModal}>
        Cancel
      </Button>
    </Modal>
  );
};

export default TodoModal;
