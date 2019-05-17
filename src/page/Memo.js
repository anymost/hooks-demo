import React, { useState, useMemo } from 'react';

export default function Memo() {
    const [c1, setC1] = useState(1);
    const [c2, setC2] = useState(1);
    const e1 = useMemo(() => {
        let sum = 0;
        for (let i = 0; i < c1 * 100; i++) {
            sum += i;
        }
        return sum;
    }, [c1]);

    const e2 = useMemo(() => {
        let sum = 0;
        for (let i = 0; i < c2 * 100; i++) {
            sum += i;
        }
        return sum;
    }, [c2]);
    return <div>
        <h4>{c1}-{c2}</h4>
        <h4>{e1}-{e2}</h4>
        <div>
            <button onClick={() => setC1(c1+1)}>+c1</button>
            <button onClick={() => setC2(c2+1)}>+c2</button>
        </div>
    </div>;
}
