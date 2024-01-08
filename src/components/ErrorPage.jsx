import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";

function ErrorPage() {
  return (
    <Container>
      <h1>잘못된 접근입니다.</h1>
      <Button href="/">홈으로</Button>
    </Container>
  );
}

export default ErrorPage;
