import React from "react";
import { Route, Link, NavLink } from "react-router-dom";
import HistorySample from "./HistorySample";
import profile from "./profile";

const Profiles = () => {
  const activeStyle = {
    background: "black",
    color: "white",
  };
  return (
    <div>
      <h3>User List</h3>
      <ul>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/mellang">
            Mellang
          </NavLink>
          {/* <Link to="/profiles/mellang">Mellang</Link> */}
        </li>
        <li>
          <NavLink activeStyle={activeStyle} to="/profiles/velopert">
            velopert
          </NavLink>
          {/* <Link to="/profiles/velopert">velopert</Link> */}
        </li>
      </ul>
      <Route path="/profiles" exact render={() => <div>사용자 선택바람</div>} />
      <Route path="/profiles/:username" component={profile} />
      <Route path="/history" component={HistorySample} />
    </div>
  );
};

export default Profiles;
