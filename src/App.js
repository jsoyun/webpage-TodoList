import React from "react";
import "./login.scss";
import "./App.scss";
import MainChart from "./component/MainChart";

/*
Route path='주소규칙'
component={우리들이 만든 주소}*/
const App = () => {
  return (
    <div>
      <h1 className="main-title">이곳에 온 것을 환영한다</h1>
      <MainChart />
    </div>
  );
};
export default App;
