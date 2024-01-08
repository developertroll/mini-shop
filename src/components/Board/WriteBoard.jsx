import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function WriteBoard() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formType">
        <Form.Label>분류</Form.Label>
        <Form.Select aria-label="Default select example">
          <option>분류</option>
          <option value="1">잡담</option>
          <option value="2">공지</option>
          <option value="3">질문과 답변</option>
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
