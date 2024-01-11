import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

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
  const Navigate = useNavigate();
  const token = localStorage.getItem("x-access-token");

  // 이 컴포넌트가 mount될때 로그인 여부 체크
  // 로그인 되어있으면 메인페이지로 이동
  // 로그인 안되어있으면 그대로
  useEffect(() => {
    if (token) {
      alert("이미 로그인 되어있습니다.");
      Navigate("/");
    }
  }, [token]);

  const onSubmit = (e) => {
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      alert("입력값을 확인해주세요");
      return;
    }
    e.preventDefault();
    console.log("submit 실행");
    const id = e.target.formID.value;
    const password = e.target.formPassword.value;
    fetchTest(id, password);
  };
  const fetchTest = async (id, pwd) => {
    axios
      .post("/login", { id: id, password: pwd })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          alert("로그인 성공");
          localStorage.setItem("x-access-token", res.data.token);
          Navigate("/");
        }
      })
      .catch((err) => {
        console.log(err);

        if (err.response.data.includes("없는 아이디")) {
          alert("없는 아이디입니다. 회원가입을 해주세요.");
          return;
        }
        alert("로그인 실패. 아이디와 비밀번호를 확인해주세요");
      });
  };

  return (
    <div style={style}>
      <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="formID">
          <Form.Label>ID</Form.Label>
          <Form.Control type="text" placeholder="Enter ID" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
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
