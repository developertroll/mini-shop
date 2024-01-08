import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

function RevertButton() {
  const navigate = useNavigate();
  return <Button onClick={() => navigate(-1)}>뒤로가기</Button>;
}

export default RevertButton;
