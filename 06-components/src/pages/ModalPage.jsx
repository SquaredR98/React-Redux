import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  }

  const actionBar = <Button primary onClick={handleClose} >I Accept</Button>
  const modal = <Modal onClose={handleClose} actionBar={actionBar}>
    <p>An important ageement for you to accept. You can't move ahead without accepting it...</p>
  </Modal>

  return (
    <div>
      <Button primary onClick={handleClick}>
        Open Modal
      </Button>
      {showModal && modal}
    </div>
  );
};

export default ModalPage;
