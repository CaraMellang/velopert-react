import React from "react";
import { Route } from "react-router";
import WithRouterSample from "./WithRouterSample";

const data = {
  mellang: {
    name: "제호",
    description: "리액트 ㅎㅇ",
  },
  velopert: {
    name: "민준띠",
    description: "리액트 좋아",
  },
};

const profile = ({ match }) => {
  const { username } = match.params;
  const profile = data[username];
  if (!profile) {
    return <div>이세카이트럭에 치였습니다.</div>;
  }

  return (
    <div>
      <h3>
        {username}({profile.name})
      </h3>
      <p>{profile.description}</p>
      <WithRouterSample />
    </div>
  );
};

export default profile;
