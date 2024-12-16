import { createContext, useState } from "react";
export const CounterCount = createContext(null);

export const CounterProvider = (props) => {
    const [count, setCount] = useState(0);
    return (
        <CounterCount.Provider value={{ count, setCount }}>
            {props.children}

        </CounterCount.Provider >

    )
}