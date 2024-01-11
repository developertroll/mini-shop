import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

function BoardButtons(props) {
  const navigate = useNavigate();
  const navigateList = () => {
    navigate("/board");
  };
  const navigateWrite = () => {
    navigate("/board/write");
  };
  return (
    <div>
      <Button variant="primary" onClick={navigateList}>
        목록
      </Button>
      <Button variant="primary" onClick={navigateWrite}>
        글쓰기
      </Button>
    </div>
  );
}

export default BoardButtons;
