import React, { useContext } from 'react';
import { CounterCount } from '../../context';

function Button() {
    const counter = useContext(CounterCount);

    return (
        <>
            <button onClick={() => counter.setCount(counter.count + 1)}>
                INCREMENT
            </button>
            <button onClick={() => counter.setCount(counter.count - 1)}>
                DECREMENT
            </button>
        </>
    );
}

export default Button;
