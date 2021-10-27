import React from "react";

// url  파라미터
const data = {
  //apple->fruitname
  apple: {
    name: "사과는 맛있어",
    description: "맛난과일",
  },
  grape: {
    name: "포도는 맛있어",
    description: "알럽 샤인머스켓",
  },
};
const Page = ({ match }) => {
  //  /page/:fruitname
  const { fruitname } = match.params;
  const info = data[fruitname];
  return (
    <div>
      <h1>{fruitname}</h1>
      <h2>({info.name})</h2>
      <h4>{info.description}</h4>
    </div>
  );
};
export default Page;
