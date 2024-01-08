import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";

function SignUp() {
  const count = useSelector((state) => state.TestReducer.count);
  return (
    <Form>
      <FloatingLabel controlId="floatingID" label="아이디">
        <Form.Control type="text" placeholder="아이디를 입력하세요" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="비밀번호">
        <Form.Control type="password" placeholder="비밀번호를 입력하세요" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPasswordConfirm" label="비밀번호 확인">
        <Form.Control type="password" placeholder="비밀번호를 입력하세요" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingName" label="이름">
        <Form.Control type="text" placeholder="이름을 입력하세요" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingEmail" label="이메일">
        <Form.Control type="email" placeholder="이메일을 입력하세요" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPhone   " label="전화번호">
        <Form.Control type="text" placeholder="전화번호를 입력하세요" />
      </FloatingLabel>
      <Button variant="primary" type="submit">
        회원가입
      </Button>
      <Form.Label style={{ float: "right" }}>
        이미 있나요? {count}
        <a href="/login">로그인</a>
      </Form.Label>
    </Form>
  );
}

export default SignUp;
