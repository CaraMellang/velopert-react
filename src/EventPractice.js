import React, { Component } from "react";

class EventPractice extends Component {
  state = {
    message: "",
  };

  constructor(props) {
    //정의하고 바인드
    super(props);
    this.handelChange = this.handelChange.bind(this);
    this.handelClick = this.handelClick.bind(this);
  }

  handelChange(e) {
    this.setState({ message: e.target.value });
  }

  handelClick() {
    alert(this.state.message);
    this.setState({ message: "" });
  }

  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="Writing to anything"
          value={this.state.message}
          onChange={this.handelChange}
        ></input>
        <button onClick={this.handelClick}>확인</button>
        {/* <input constructor 메서드 없이 즉석으로 하기
          type="text"
          name="message"
          placeholder="Writing to anything"
          value={this.state.message}
          onChange={(e) => {
            // console.log(e.target.value);
            this.setState({ message: e.target.value });
          }}
        ></input>
        <button
          onClick={() => {
            alert(this.state.message);
            this.setState({ message: "" });
          }}
        >
          확인
        </button> */}
      </div>
    );
  }
}

export default EventPractice;
