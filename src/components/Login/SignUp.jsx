import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import Button from "react-bootstrap/Button";
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SignUp() {
  const count = useSelector((state) => state.TestReducer.count);
  const Navigate = useNavigate();
  const [validated, setValidated] = useState(false);
  const [user, setUser] = useState({
    id: "",
    password: "",
    name: "",
    email: "",
    phone: "010-",
    age: "",
  });

  const onChange = (e) => {
    setUser((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  const submit = (e) => {
    // Form 유효성 검사
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.preventDefault();
      e.stopPropagation();
      alert("입력값을 확인해주세요");
      return;
    }
    e.preventDefault();
    if (window.confirm("이 정보로 가입하시겠습니까? (확인/취소)")) {
      console.log("가입실행");
      setValidated(true);
      fetchtest();
    }
    console.log("가입취소");
    // Form 내부 데이터 콘솔 출력
  };

  const fetchtest = async () => {
    axios
      .post("/signup", user)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          alert("회원가입 성공");
          Navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <Form noValidate onSubmit={submit} validated={validated}>
      <FloatingLabel controlId="floatingID" label="아이디(4~12자)">
        <Form.Control
          required
          type="text"
          placeholder="아이디를 입력하세요(4~12자)"
          name="id"
          value={user.id}
          onChange={onChange}
          pattern="^[a-zA-Z0-9]{4,12}$"
        />
        <Form.Control.Feedback type="invalid">
          아이디를 입력하세요
        </Form.Control.Feedback>
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingPassword"
        label="비밀번호(대소문자, 숫자 포함 8~20자)"
      >
        <Form.Control
          required
          type="password"
          placeholder="비밀번호를 입력하세요"
          name="password"
          value={user.password}
          onChange={onChange}
          pattern="^[a-zA-Z0-9]{8,20}"
        />
        <Form.Control.Feedback type="invalid">
          비밀번호를 입력하세요
        </Form.Control.Feedback>
      </FloatingLabel>
      <FloatingLabel controlId="floatingPasswordConfirm" label="비밀번호 확인">
        <Form.Control
          required
          type="password"
          placeholder="비밀번호를 입력하세요"
          name="passwordCheck"
          pattern={user.password}
        />
        <Form.Control.Feedback type="invalid">
          동일한 비밀번호를 입력해주세요
        </Form.Control.Feedback>
      </FloatingLabel>
      <FloatingLabel controlId="floatingName" label="이름">
        <Form.Control
          type="text"
          placeholder="이름을 입력하세요"
          required
          name="name"
          value={user.name}
          onChange={onChange}
        />
        <Form.Control.Feedback type="invalid">
          이름을 입력하세요
        </Form.Control.Feedback>
      </FloatingLabel>
      <FloatingLabel
        controlId="floatingEmail"
        label="이메일(예시: example@example.com)"
      >
        <Form.Control
          type="email"
          placeholder="이메일을 입력하세요"
          required
          name="email"
          value={user.email}
          onChange={onChange}
        />
        <Form.Control.Feedback type="invalid">
          올바르지 않은 이메일 형식입니다
        </Form.Control.Feedback>
      </FloatingLabel>
      {/* 전화번호는 다른 방식으로 받는거 고려중 */}
      <FloatingLabel controlId="floatingPhone" label="전화번호(01x-xxxx-xxxx)">
        <Form.Control
          type="text"
          placeholder="전화번호를 입력하세요"
          name="phone"
          value={user.phone}
          onChange={onChange}
          pattern="^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$"
        />
        <Form.Control.Feedback type="invalid">
          "010-1234-5678" 형식으로 입력해주세요
        </Form.Control.Feedback>
      </FloatingLabel>
      <FloatingLabel controlId="floatingAge" label="나이">
        <Form.Control
          type="number"
          placeholder="나이를 입력하세요"
          required
          name="age"
          value={user.age}
          onChange={onChange}
          min="0"
          max="150"
        />
        <Form.Control.Feedback type="invalid">
          올바르지 않은 나이입니다
        </Form.Control.Feedback>
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
