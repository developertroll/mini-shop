import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

function BoardBase(props) {
  return (
    <Row>
      <Col>{props.index}</Col>
      <Col xs={8}>{props.title}</Col>
      <Col>{props.writer}</Col>
      <Col>{props.like}</Col>
      <Col>{props.view}</Col>
      <Col>{props.update}</Col>
    </Row>
  );
}

export default BoardBase;
