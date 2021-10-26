import React from "react";
import qs from "qs";

const About = ({ location }) => {
  const query = qs.parse(location.search, {
    //얘는 물음표 생략해주는애.
    ignoreQueryPrefix: true,
  });
  const showAbout = query.detail === "true";
  return (
    <div>
      <h1>나는 어바웃페이지</h1>
      <h2>오늘점심은 롣지</h2>
      <h3>저녁은 삼겹살에 밥</h3>
      {showAbout && <h6>이히히</h6>}
    </div>
  );
};
export default About;
