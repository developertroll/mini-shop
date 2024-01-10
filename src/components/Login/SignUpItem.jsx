import React from "react";
import Form from "react-bootstrap/Form";

function SignUpItem({ type, label }) {
  return (
    <Form.Group className="mb-3" controlId={`$form${label}`}>
      <Form.Label>{label}</Form.Label>
      <Form.Control type={type} />
    </Form.Group>
  );
}

export default SignUpItem;
