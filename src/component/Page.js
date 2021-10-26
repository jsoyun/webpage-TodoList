import React from "react";

// url  파라미터
const data = {
  apple: {
    name: "사과",
    description: "맛난과일",
  },
  grape: {
    name: "포도",
    description: "알럽 샤인머스켓",
  },
};
const Page = ({ match }) => {
  const { fruitname } = match.params;
  const info = data[fruitname];
  return (
    <div>
      <h1>
        {fruitname}({info.name})
      </h1>
      <h4>{info.description}</h4>
    </div>
  );
};
export default Page;
