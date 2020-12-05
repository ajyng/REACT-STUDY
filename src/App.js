import React from 'react';
import { Button } from 'antd';
import 'App.css';

const actions = {
  init(initialValue) {
    return { value: initialValue };
  },
  increment(prevState) {
    return { value: prevState.value + 1 };
  },
  decrement(prevState) {
    return { value: prevState.value - 1 };
  },
};

// 클래스형 Component
//    => 컴포넌트의 내부 값들이 변경될 때마다 render() 함수가 호출된다.
class Counter1 extends React.Component {
  state = actions.init(this.props.initialValue);

  onClick = () => {
    const value = this.state.value + 1;
    // const { value } = this.state; // this.state에서 value 상탯값을 받아온다.
    this.setState({ value }); // state명과 일치하기 때문. ex) {value:value}
    // this.setState({ value: value + 1 });
  };

  render() {
    const { value } = this.state; // 현재의 상탯값을 참조
    return (
      <div>
        Counter 1: {value}
        <Button onClick={() => this.setState(actions.increment)}>+1</Button>
        <Button onClick={() => this.setState(actions.decrement)}>+1</Button>
      </div>
    );
  }
}

// 함수형 Component
function App() {
  return (
    <div>
      <Counter1 initialValue={10} />{' '}
      {/* 위에서 선언한 'Counter1'이라는 컴포넌트 활용 */}
    </div>
  );
}

export default App;
