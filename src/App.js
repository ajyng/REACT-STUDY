import React from 'react';
import { Button } from 'antd';
import 'App.css';

class Counter1 extends React.Component {
  state = {
    value: this.props.initialVlaue,
  };

  onClick = () => {
    const { value } = this.state;
    this.setState({ value: value + 1 });
  };

  render() {
    const { value } = this.state; // 현재의 상탯값을 참조
    return (
      <div>
        Counter 1: {value}
        <Button onClick={this.onClick}>+1</Button>
      </div>
    );
  }
}

class FruitComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>좋아하는 과일</h1>
        <ul>
          {this.props.fruits.map((name, index) => (
            <li key={index}>{name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

function App() {
  const fruits = ['바나나', '사과', '딸기'];
  return (
    <div>
      <Counter1 initialVlaue={10} />
      <FruitComponent fruits={fruits} />
    </div>
  );
}

export default App;
