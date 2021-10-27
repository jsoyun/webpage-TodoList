import React from "react";
import "./login.scss";
import "./App.scss";
import { Route, Link } from "react-router-dom";
// import About from "./component/About";
import { About } from "./component/ComponentPages"; //App.js에 컴포넌트쓴거 여기다가 묶어줄 수 있음!!
import Home from "./component/Home";
import Login from "./component/Login";
import Page from "./component/Page";
import CreateAccount from "./component/CreateAccount";

/*
Route path='주소규칙'
component={우리들이 만든 주소}*/
const App = () => {
  return (
    <div>
      <h1 className="main-title">이곳에 온 것을 환영한다</h1>
      <ul className>
        <li>
          <Link to="/">뭐부터?</Link>
        </li>

        <li>
          <Link to="/about">약관</Link>
        </li>
        <li>
          <Link to="/login">로그인</Link>
        </li>
        <li>
          <Link to="/page/apple">사과</Link>
        </li>
        <li>
          <Link to="/page/grape">포도</Link>
        </li>
      </ul>

      <Route path="/" component={Home} exact={true} />
      <Route path="/about" component={About} />
      <Route path="/login" component={Login} />
      {/* 여러개 사용할때는 props배열로.. */}
      {/* <Route path={["/about", "/login"]} component={About} /> */}

      {/* match.params.fruitname  이 값을 통해서 현재 과일이름조회 */}
      {/* 이게 파라미터 방식.match 라는 객체 안에 값참조.. */}
      <Route path="/page/:fruitname" component={Page} />
      <Route path="/CreateAccount" component={CreateAccount} />
    </div>
  );

  //Link:주소이동 컴포넌트, 내부는 a태그로 만들어져있음
};
export default App;
