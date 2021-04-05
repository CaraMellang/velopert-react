import React, { Component } from "react";

class LifeCycleSample extends Component {
  state = {
    number: 0,
    color: null,
  };

  myRef = null; //레퍼런스 설정부분

  constructor(props) {
    super(props);
    console.log("constructor");
    console.log(props);
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("getDerivedStateFromProps");
    if (nextProps.color !== prevState.color) {
      return { color: nextProps.color };
    }
    return null;
  }

  componentDidMount() {
    console.log("컴포넌트디드마운트");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("컴포넌트업데이트", nextProps, nextState);
    //숫자 마지막자리 4라면 리렌더링 X
    return nextState.number % 10 !== 4;
  }

  componentWillUnmount() {
    console.log("컴포넌트윌 언마운트");
  }

  handleClick = () => {
    this.setState({
      number: this.state.number + 1,
    });
  };

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("스냅샷");
    if (prevProps.color !== this.props.color) {
      return this.myRef.color;
    }
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("컴포넌트 디드 업데이트", prevProps, prevState);
    if (snapshot) {
      console.log("업데이트 되기전 색상 : ", snapshot);
    }
  }

  render() {
    const style = {
      color: this.props.color,
    };
    return (
      <div>
        {this.props.missing.value}
        <h1 style={style} ref={(ref) => (this.myRef = ref)}>
          {this.state.number}
        </h1>
        <p>color: {this.state.color}</p>
        <button onClick={this.handleClick}>더하기</button>
      </div>
    );
  }
}

export default LifeCycleSample;
