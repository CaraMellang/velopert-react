import React, { useEffect, useState, useReducer } from "react";
import useInputs from "./useInputs";

// function reducer(state, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return { value: state.value + 1 };
//     case "DECREMENT":
//       return { value: state.value - 1 };
//     default:
//       return state;
//   }
// }

// function reducer(state, action) {
//   console.log(action);
//   return {
//     ...state,
//     [action.name]: action.value,
//   };
// }

const PracticeHooks = () => {
  // const [state, dispatch] = useReducer(reducer, { value: 0 });
  // const [state, dispatch] = useReducer(reducer, { name: "", nick: "" });
  // const { name, nick } = state;

  const [state, onChange] = useInputs({
    name: "",
    nick: "",
  });
  const { name, nick } = state;

  const [value, setValue] = useState(0);

  // const onChnage = (e) => {
  //   dispatch(e.target);
  // };

  // const [name, setName] = useState("");
  // const [nick, setNick] = useState("");

  //// useEffect(() => {
  ////   console.log("마운트 될 때만 실행됩니다.");
  ////   // console.log("Rendering has Completed!");
  // //   // console.log({ name, nick });
  //// }, []); //빈 배열넣을시 마운트,언마운트될 때만 실행

  // useEffect(() => {
  //   console.log(name);
  // }, [name]); //해당값이 바뀔 때 마다 실행 , 빈 배열 넣을시 숨기기클릭시 언마운트될때만 실행

  // const onChangeName = (e) => {
  //   setName(e.target.value);
  // };

  // const onChangeNick = (e) => {
  //   setNick(e.target.value);
  // };

  return (
    <div>
      <p>
        {/* 현재 카운터 값은 <b>{value}</b>입니다. */}
        현재 카운터 값은 <b>{state.value}</b>입니다.
      </p>
      {/* <button onClick={() => setValue(value + 1)}>+1</button>
      <button onClick={() => setValue(value - 1)}>-1</button> */}
      {/* <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button> */}
      <br />
      <input name="name" value={name} onChange={onChange} />
      <input name="nick" value={nick} onChange={onChange} />
      <br />
      <b>이름: </b>
      {name}
      <br />
      <b>닉네임: </b>
      {nick}
    </div>
  );
};

export default PracticeHooks;
