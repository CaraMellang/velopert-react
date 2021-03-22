import React, { useState } from "react";

const Say = () => {
  const [message, setMessage] = useState("");
  const onClickEnter = () => setMessage("hi");
  const onClickLeave = () => setMessage("bye");

  const [color, setColor] = useState("black");

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>잘가</button>
      <h1 style={{ color }}>{message}</h1>
      <button onClick={() => setColor("red")}>뤠드</button>
      <button onClick={() => setColor("blue")}>불루</button>
      <button onClick={() => setColor("green")}>그륜힐</button>
    </div>
  );
};

export default Say;
