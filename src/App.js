import React from "react";
import "./App.css";
import MyComponent from "./MyComponent";
import Counter, { kukukaka } from "./Counter";
import Say from "./Say";
import EventPractice from "./EventPractice";

// const App = () => {
//   return <MyComponent name="랄라라" />;
// };

function App() {
  const name = "리액트";
  console.log(kukukaka.kukukiki);
  return (
    <div>
      <div className="reacta">{name}</div>
      <div>
        <h1>sadsad </h1>

        <h2>헬렐렐</h2>
        <h3>버버버법ㅂ</h3>
      </div>
      <MyComponent name={name} favoriteNumber={7}>
        좋아요와 구독 알림설정까지
      </MyComponent>
      <Counter />
      <Say />
      <EventPractice />
    </div>
  );
}

export default App;
