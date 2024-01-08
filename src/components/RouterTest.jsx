import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import TestComponent2 from "./TestComponent2";

function RouterTest() {
  const navigate = useNavigate();
  const count = useSelector((state) => state.TestReducer.count);

  const ClickCountCheck = () => {
    if (count < 0) {
      navigate("/login");
    } else {
      navigate("/");
    }
  };

  return (
    <div>
      <h1>RouterTest</h1>
      <h2>Count : {count}</h2>
      <TestComponent2 />
      <Button onClick={ClickCountCheck}>조건문</Button>
    </div>
  );
}

export default RouterTest;
