import React, { useState, createContext, useContext } from 'react';

const CounterContext = createContext();

const App = () => {
    const [value, setValue] = useState(0);
    const onIncrement = () => {
        setValue((preValue) => preValue + 1);
    }

    return (
    <div>
        App: {value}
        <button onClick={onIncrement}>Click!</button>
        <CounterContext.Provider value={ {value, onIncrement} }>
            <Level3 />
        </CounterContext.Provider>
    </div>
    );
};

const Level3 = () => {
    const { value, onIncrement } = useContext(CounterContext);

    return (
        <div>
            Level3: {value}
            <button onClick={onIncrement}>Click!</button>
        </div>
    );
}

export default App;