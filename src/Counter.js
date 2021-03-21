import React, { Component } from "react";

class Counter extends Component {
  state = {
    //consrtuctor를 선언 안해도 가능함
    number: 0,
    fixedNumber: 0,
  };
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     number: 0,
  //     fixedNumber: 0,
  //   };
  // }
  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바꾸고 싶지만 바뀌지않아 무야호 :{fixedNumber}</h2>
        <button
          onClick={() => {
            //this.setState를 사용해 state에 새로운 값 주입
            /* setState두번 호출하고싶을 땐 함수로 매개변수로 넣어줌
            this.setState((prevState) => ({ number: prevState.number + 1 }));
            this.setState((prevState) => {
              return {
                number: prevState.number + 1,
              };
            });*/

            this.setState(
              { number: number + 1 },
              () => window.alert("setState has called!"),
              console.log(this.state)
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export const kukukaka = {
  kukukiki: "안녕!",
};

export default Counter;
