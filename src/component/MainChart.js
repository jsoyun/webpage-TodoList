import React from "react";
import { Route, Link } from "react-router-dom";
import { About } from "./ComponentPages"; //App.js에 컴포넌트쓴거 여기다가 묶어줄 수 있음!!
import Home from "./Home";
import Login from "./Login";
import Page from "./Page";
import CreateAccount from "./CreateAccount";

const MainChart = () => {
  return (
    <div>
      <ul className>
        <li>
          {/* Link:주소이동 컴포넌트, 내부는 a태그로 만들어져있음 */}
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
      <Route path="/login" component={Login} />
      {/* 여러개 사용할때는 props배열로.. */}
      <Route path={["/about", "/login", "/page/apple"]} component={About} />

      {/* match.params.fruitname  이 값을 통해서 현재 과일이름조회 */}
      {/* 이게 파라미터 방식.match 라는 객체 안에 값참조.. */}
      <Route path="/page/:fruitname" component={Page} />
      <Route path="/CreateAccount" component={CreateAccount} />
    </div>
  );
};

export default MainChart;
