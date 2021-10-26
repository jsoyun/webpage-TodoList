import React from "react";
import "./login.scss";
import "./App.scss";
import { Route, Link } from "react-router-dom";
import About from "./component/About";
import Home from "./component/Home";
import Login from "./component/Login";
import Page from "./component/Page";
import CreateAccount from "./component/CreateAccount";
import TodoTemplate from "./component/TodoTemplate";
import TodoHead from "./component/TodoHead";
import TodoList from "./component/TodoList";
import TodoCreate from "./component/TodoCreate";

//styled-components 에서 특정 컴포넌트를 만들어서 스타일링 하는게 아니라
//글로벌 스타일을 추가하고 싶을 땐 createGlobalStyle 이라는 것을 사용
import { createGlobalStyle } from "styled-components";

//todo리스트만들기
const GlobalStyle = createGlobalStyle`
p{
  background:  #e9ecef;
}`;

/*
Route path='주소규칙'
component={우리들이 만든 주소}*/
const App = () => {
  return (
    <div>
      <h1 className="main-title">이곳에 온 것을 환영한다</h1>
      <ul className>
        <li>
          <Link to="/">홈</Link>
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
      <>
        <GlobalStyle />
        <TodoTemplate>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoTemplate>
      </>
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
