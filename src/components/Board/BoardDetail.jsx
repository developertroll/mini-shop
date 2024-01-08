import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useParams } from "react-router-dom";

function BoardDetail() {
  const { index } = useParams();
  const target = boardList[index];
  return (
    <div>
      <Row>
        <Col>{`[${props.type}]${props.title}`}</Col>
      </Row>
      <Row>
        <Col>{`작성자: ${props.writer}`}</Col>
        <Col>{`조회수: ${props.view}`}</Col>
        <Col>{`좋아요: ${props.like}`}</Col>
        <Col>{`수정일: ${props.update}`}</Col>
      </Row>
      <Row>
        <Col>{props.content}</Col>
      </Row>
    </div>
  );
}

export default BoardDetail;
