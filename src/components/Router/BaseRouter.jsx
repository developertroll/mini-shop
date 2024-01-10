import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import BaseLayout from "../BaseLayout";
import TestComponent2 from "../TestComponent2";
import Login from "../Login/LoginUI";
import Signup from "../Login/SignUp";
import RouterTest from "../RouterTest";
import SignUp2 from "../Login/SignUp2";

const BaseRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route index element={<TestComponent2 />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signUpTest" element={<SignUp2 />} />
          {/* <Route path="about" element={<About />} />


          <Route path="board" element={<Board />} />
          <Route path="board/:index" element={<BoardDetail />} />
          <Route path="board/write" element={<BoardWrite />} />
          <Route path="shop" element={<Shop />} /> */}
          <Route path="Test" element={<TestComponent2 />} />
          <Route path="*" element={<Navigate replace to="/" />} />
          <Route path="Test2" element={<RouterTest />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default BaseRouter;
