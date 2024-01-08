import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

function ConfirmModal(props) {
  const [show, setShow] = useState(true);
  const [confirm, setConfirm] = useState(false);
  const handleClose = () => setShow(false);
  const handleConfirm = () => {
    setConfirm(true);
    setShow(false);
  };
  const handleCancel = () => {
    setConfirm(false);
    setShow(false);
  };
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>확인</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.message}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            취소
          </Button>
          <Button variant="primary" onClick={handleConfirm}>
            확인
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ConfirmModal;
