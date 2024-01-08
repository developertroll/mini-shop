import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const style = {
  // 화면 중앙 정렬
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  height: "100vh",
};

function LoginUI() {
  return (
    <div style={style}>
      <Form>
        <Form.Group className="mb-3" controlId="formID">
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" placeholder="Enter ID" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="primary" type="submit">
          로그인
        </Button>
        <Form.Label style={{ float: "right" }}>
          <a href="/signup">회원가입</a>
        </Form.Label>
      </Form>
    </div>
  );
}

export default LoginUI;
