// import React, { Component } from "react";
import React, { useState } from "react";

const EventPractice = () => {
  const [form, setForm] = useState({
    //인풋의 갯수가 많을때 사용
    username: "",
    message: "",
  });

  const { username, message } = form;
  const onChange = (e) => {
    const nextForm = {
      ...form, //기존 form의 내용 복사
      [e.target.name]: e.target.value, //원하는 값 덮어 씌우기
    };
    setForm(nextForm);
  };
  const onClick = () => {
    alert(username + " : " + message);
    setForm({
      username: "",
      message: "",
    });
  };
  const onKeyPress = (e) => {
    if (e.key === "Enter") onClick();
  };

  // const [username, setUsername] = useState(""); 인풋의 개수가 적을때 사용
  // const [message, setMessage] = useState("");
  // const onChangeUsername = (e) => setUsername(e.target.value);
  // const onChangeMessage = (e) => setMessage(e.target.value);
  // const onClick = () => {
  //   alert(username + " : " + message);
  //   setUsername("");
  //   setMessage("");
  // };
  // const onKeyPress = (e) => {
  //   if (e.key === "Enter") onClick();
  // };

  return (
    <div>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="Writing to anything"
        value={message}
        onChange={onChange}
        onKeyPress={onKeyPress}
      />
      <button onClick={onClick}>확인</button>
    </div>
  );
};

// class EventPractice extends Component {
//   state = {
//     username: "",
//     message: "",
//   };

//   // constructor(props) {
//   //   //정의하고 바인드
//   //   super(props);
//   //   this.handleChange = this.handleChange.bind(this);
//   //   this.handleClick = this.handleClick.bind(this);
//   // }

//   // handleChange(e) {
//   //   this.setState({ message: e.target.value });
//   // }

//   // handleClick() {
//   //   alert(this.state.message);
//   //   this.setState({ message: "" });
//   // }

//   //바벨의 문법으로 화살표함수로 메서드를 정의(constructor안써도 됨)
//   handleChange = (e) => {
//     this.setState({
//       // message: e.target.value,
//       [e.target.name]: e.target.value,
//     });
//   };

//   handleClick = () => {
//     // alert(this.state.message);
//     if (this.state.username === "" || this.state.message === "") {
//       alert("아무것도 없다 이뇨속아");
//     } else {
//       alert(this.state.username + " : " + this.state.message);
//     }
//     this.setState({
//       username: "",
//       message: "",
//     });
//   };

//   handleKeyPress = (e) => {
//     if (e.key === "Enter") {
//       this.handleClick();
//     }
//   };

//   render() {
//     return (
//       <div>
//         <h1>이벤트 연습</h1>
//         <input
//           type="text"
//           name="username"
//           placeholder="사용자명"
//           value={this.state.username}
//           onChange={this.handleChange}
//         ></input>
//         <input
//           type="text"
//           name="message"
//           placeholder="Writing to anything"
//           value={this.state.message}
//           onChange={this.handleChange}
//           onKeyPress={this.handleKeyPress}
//         ></input>
//         <button onClick={this.handleClick}>확인</button>
//         {/* <input constructor 메서드 없이 즉석으로 하기
//           type="text"
//           name="message"
//           placeholder="Writing to anything"
//           value={this.state.message}
//           onChange={(e) => {
//             // console.log(e.target.value);
//             this.setState({ message: e.target.value });
//           }}
//         ></input>
//         <button
//           onClick={() => {
//             alert(this.state.message);
//             this.setState({ message: "" });
//           }}
//         >
//           확인
//         </button> */}
//       </div>
//     );
//   }
// }

export default EventPractice;
