import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCount, decreaseCount } from "./Reducer/TestReducer";
import TestTest from "./TestTest";
import axios from "axios";

function TestComponent2() {
  const count = useSelector((state) => state.TestReducer.count);
  const dispatch = useDispatch();
  const ADD = () => dispatch(addCount());
  const DECREASE = () => dispatch(decreaseCount());

  const fetchTest = async () => {
    axios
      .post("/login", { id: "admin", password: "admin" })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <button onClick={fetchTest}>fetchTest</button>
      <TestTest count={count} add={ADD} decrease={DECREASE} />
    </div>
  );
}

export default TestComponent2;
