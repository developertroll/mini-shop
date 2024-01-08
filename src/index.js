import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";

import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./components/Reducer/rootReducer";
// import LoginUI from "./components/Login/LoginUI";
// import WriteBoard from "./components/Board/WriteBoard";
// import SignUp from "./components/Login/SignUp";
// import TestComponent2 from "./components/TestComponent2";
import BaseRouter from "./components/Router/BaseRouter";

const store = createStore(rootReducer);
console.log(store.getState());

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BaseRouter />
      {/* <BaseLayout /> */}
      {/* <LoginUI />
      <WriteBoard />
      <SignUp />
      <TestComponent2 />
      <App /> */}
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
