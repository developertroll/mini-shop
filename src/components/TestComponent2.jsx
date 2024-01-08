import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addCount, decreaseCount } from "./Reducer/TestReducer";
import TestTest from "./TestTest";

function TestComponent2() {
  const count = useSelector((state) => state.TestReducer.count);
  const dispatch = useDispatch();
  const ADD = () => dispatch(addCount());
  const DECREASE = () => dispatch(decreaseCount());

  return (
    <div>
      <TestTest count={count} add={ADD} decrease={DECREASE} />
    </div>
  );
}

export default TestComponent2;
