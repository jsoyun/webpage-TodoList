import React from "react";
import TodoTemplate from "./TodoTemplate";
import TodoHead from "./TodoHead";
import TodoList from "./TodoList";
import TodoCreate from "./TodoCreate";
import { TodoProvider } from "./TodoContext";
//styled-components 에서 특정 컴포넌트를 만들어서 스타일링 하는게 아니라
//글로벌 스타일을 추가하고 싶을 땐 createGlobalStyle 이라는 것을 사용
import { createGlobalStyle } from "styled-components";

//todo리스트만들기
const GlobalStyle = createGlobalStyle`
p{
  background:  #e9ecef;
}`;

export default function Home() {
  return (
    <div>
      <TodoProvider>
        <GlobalStyle />
        <TodoTemplate>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoTemplate>
      </TodoProvider>
    </div>
  );
}
