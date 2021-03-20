import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }
  render() {
    const { number } = this.state;
    console.log(number);
    return (
      <div>
        <h1>{number}</h1>
        <button
          onClick={() => {
            //this.setState를 사용해 state에 새로운 값 주입
            this.setState({ number: number + 2 });
          }}
        >
          +2
        </button>
      </div>
    );
  }
}

export const kukukaka = {
  kukukiki: "안녕!",
};

export default Counter;
