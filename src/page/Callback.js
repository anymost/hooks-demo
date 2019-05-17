import React, { useState, useCallback } from 'react';

const set = new Set();

export default function Callback() {
    const [c1, setC1] = useState(1);
    const [c2, setC2] = useState(1);
    const increment1 = useCallback(()=> setC1(c1+1), [c1]);
    const increment2 = useCallback(()=> setC2(c2+1), [c2]);
    set.add(increment1);
    set.add(increment2);

    return <div>
        <h4>{c1} -{c2}</h4>
        <div>
            <button onClick={increment1}>+c1</button>
            <button onClick={increment2}>+c2</button>
        </div>
        <h4>{set.size}</h4>
    </div>
}
