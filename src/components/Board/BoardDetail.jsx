import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useLocation } from "react-router-dom";
import moment from "moment";
import BoardButtons from "./BoardButtons";

function BoardDetail() {
  const location = useLocation();
  const prop = { ...location.state };
  const update = moment(prop.update).format("YYYY-MM-DD");
  return (
    <div>
      <Row>
        <Col>{`[${prop.Type}]${prop.Title}`}</Col>
      </Row>
      <Row>
        <Col>{`작성자: ${prop.writer}`}</Col>
        <Col>{`조회수: ${prop.view}`}</Col>
        <Col>{`좋아요: ${prop.like}`}</Col>
        <Col>{`수정일: ${update}`}</Col>
      </Row>
      <Row>
        <Col>{prop.content}</Col>
      </Row>
      <BoardButtons />
    </div>
  );
}

export default BoardDetail;
