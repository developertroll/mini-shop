import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useLocation } from "react-router-dom";
import axios from "axios";
import moment from "moment";
import BoardButtons from "./BoardButtons";

const titleStyle = {
  border: "1px solid black",
  font: "bold",
  textAlign: "left",
  padding: "10px",
  margin: "10px",
};

const propStyle = {
  textAlign: "left",
  padding: "10px",
  margin: "10px",
  border: "1px solid black",
};

const contentStyle = {
  border: "1px solid black",
  padding: "10px",
  margin: "10px",
};

const contentNoStyle = {
  border: "1px solid black",
  padding: "10px",
  textAlign: "center",
  margin: "10px",
};

function writerName(idx) {
  let writer = "";
  axios.get(`/userinfo/${idx}`).then((res) => {
    writer = res.data.name;
  });
  return writer;
}

function contentStyleChk(content) {
  if (content.includes("\n")) return contentStyle;
  else return contentNoStyle;
}
function BoardDetail() {
  const location = useLocation();
  const prop = { ...location.state };
  const writer = writerName(prop.writer);
  const update = moment(prop.update).format("YYYY-MM-DD");
  return (
    <div className="board-detail">
      <Row style={titleStyle}>
        <Col className="board-detail-title">{`[${prop.Type}]${prop.Title}`}</Col>
      </Row>
      <Row style={propStyle}>
        <Col>{`작성자: ${writer}`}</Col>
        <Col>{`조회수: ${prop.view + 1}`}</Col>
        <Col>{`좋아요: ${prop.like_count}`}</Col>
        <Col>{`수정일: ${update}`}</Col>
      </Row>
      <Row style={contentStyleChk(prop.content)}>
        <Col className="board-detail-content">{prop.content}</Col>
      </Row>
      <BoardButtons />
    </div>
  );
}

export default BoardDetail;
