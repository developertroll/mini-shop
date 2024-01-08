import React from "react";

function TestTest({ count, add, decrease, set }) {
  const onChange = (e) => {
    set(e.target.value);
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={add}>더하기</button>
      <button onClick={decrease}>빼기</button>
    </div>
  );
}

export default TestTest;
