import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const style = {
  cursor: "pointer",
  border: "1px solid black",
};

function BoardBase(props) {
  const handleClick = () => {
    props.showDetail(props.index);
  };
  return (
    <Row onClick={handleClick} style={style}>
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
