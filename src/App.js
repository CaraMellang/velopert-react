import React, { Component, useRef } from "react";
import "./App.css";
import MyComponent from "./MyComponent";
import Counter, { kukukaka } from "./Counter";
import Say from "./Say";
import EventPractice from "./EventPractice";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";
import IterationSample from "./IterationSample";

function App() {
  //함수형
  const name = "리액트";
  console.log(kukukaka.kukukiki);
  const wow = useRef();
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
      <ValidationSample />
      <ScrollBox ref={wow} />
      <button onClick={() => wow.current.scrollToBottom()}>맨밑으로</button>
      <IterationSample />
    </div>
  );
}

// class App extends Component {
//   render() {
//     return (
//       <div>
//         <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
//         <button onClick={() => this.scrollBox.scrollToBottom()}>
//           맨밑으로
//         </button>
//       </div>
//     );
//   }
// }

export default App;
