import React, { useState, createContext, useContext, useReducer } from 'react';

const CounterContext = createContext();

const INCREMNET = "COUNTER/INCREMNET";
const DECREMNET = "COUNTER/DECREMNET";

const reducer = (prevState, action) => {
    const { type, payload: value = 1 } = action;
    if ( type === INCREMNET ) {
        return prevState + value;
    }
    else if ( type === DECREMNET ) {
        return prevState - value;
    }
    return prevState;
};

const actionIncrement = (value) => ({ type: INCREMNET, payload: value });
const actionDecrement = (value) => ({ type: DECREMNET, payload: value });

const App = () => {
    const [state, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            <h1 onClick={() => dispatch( actionDecrement(3) )}>App9: {state}</h1>
            <CounterContext.Provider value={{ state, dispatch }}>
                <GameBox />
            </CounterContext.Provider>
        </div>
    );
};

const GameBox = () => {
    const { state: counteValue, dispatch } = useContext(CounterContext);
    const onClick = () => {
        dispatch( actionIncrement(5) );
    };
    return (
        <div>
            <h2>GameBox</h2>
            <button onClick={onClick}>{counteValue}</button>
        </div>
    );
};

export default App; 