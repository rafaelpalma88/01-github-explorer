import React, { useState } from 'react'

export default function Counter() {

    const [counter, setCounter] = useState(0);

    const counterIncrement = () => {
        setCounter(counter + 1);
    }

    return (
        <div>
            <p>Counter: {counter}</p>
            <button type="button" onClick={counterIncrement}>Clique aqui</button>
        </div>
    )
}
