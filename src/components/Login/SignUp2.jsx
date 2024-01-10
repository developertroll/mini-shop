import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import SignUpItem from "./SignUpItem";

function SignUp2() {
  return (
    <Form>
      <SignUpItem type="text" label="아이디" />
      <SignUpItem type="password" label="비밀번호" />
      <SignUpItem type="password" label="비밀번호 확인" />
      <SignUpItem type="text" label="이름" />
      <SignUpItem type="email" label="이메일" />
      <SignUpItem type="text" label="전화번호" />
      <Button variant="primary" type="submit">
        회원가입
      </Button>
      <Form.Label style={{ float: "right" }}>
        이미 있나요?
        <a href="/login">로그인</a>
      </Form.Label>
    </Form>
  );
}

export default SignUp2;
