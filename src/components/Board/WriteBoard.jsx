import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import moment from "moment";
import { useNavigate } from "react-router-dom";

function WriteBoard() {
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("작성 완료");
    axios
      .post("/write", {
        board: {
          type: e.target.formType.value,
          title: e.target.formTitle.value,
          content: e.target.formContent.value,
          like: 0,
          writer: 0,
          update: moment().format("YYYY-MM-DD"),
        },
      })
      .then((res) => {
        console.log(res);
        navigate("/board");
      });
  };
  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formType">
        <Form.Label>분류</Form.Label>
        <Form.Select aria-label="Default select example">
          <option>분류</option>
          <option value="common">잡담</option>
          <option value="notice">공지</option>
          <option value="qna">질문과 답변</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formTitle">
        <Form.Label>제목</Form.Label>
        <Form.Control type="text" placeholder="제목을 입력하세요" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formContent">
        <Form.Label>내용</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Button variant="primary" type="submit">
        작성
      </Button>
    </Form>
  );
}

export default WriteBoard;
