import React, { Component, useRef, useState } from "react";
import "./App.css";
import MyComponent from "./MyComponent";
import Counter, { kukukaka } from "./Counter";
import Say from "./Say";
import EventPractice from "./EventPractice";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";
import IterationSample from "./IterationSample";
import LifeCycleSample from "./LifeCycleSample";
import ErrorBoundary from "./ErrorBoundary";
import PracticeHooks from "./PracticeHooks";
import Average from "./Average";

function App() {
  //함수형
  const name = "리액트";
  console.log(kukukaka.kukukiki);
  const wow = useRef();
  const [visible, setvisible] = useState(false);
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
      {/* <LifeCycleSample /> */}
      <br />
      <button onClick={() => setvisible(!visible)}>
        {visible ? "숨기기" : "보이기"}
      </button>
      <hr />
      {visible && <PracticeHooks />}
      <Average />
    </div>
  );
}

// function getRandomColor() {
//   return "#" + Math.floor(Math.random() * 16777215).toString(16);
// }

// class App extends Component {
//   state = {
//     color: "#000000",
//   };

//   handleClick = () => {
//     this.setState({
//       color: getRandomColor(),
//     });
//   };
//   render() {
//     return (
//       <div>
//         <ScrollBox ref={(ref) => (this.scrollBox = ref)} />
//         <button onClick={() => this.scrollBox.scrollToBottom()}>
//           맨밑으로
//         </button>
//         <br />
//         <button onClick={this.handleClick}>랜덤색상</button>
//         <ErrorBoundary>
//           <LifeCycleSample color={this.state.color} />
//         </ErrorBoundary>
//       </div>
//     );
//   }
// }

export default App;
