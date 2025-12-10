import React, { useRef } from "react";

const RefSample = () => {
    const id = useRef(1);

    const setId = (n) => {
        id.current = n;
    };

    const printId = () => {
        console.log(id.current);
    };

    return (
        <div>
            <p>현재 id: {id.current}</p>
            <button onClick={() => setId(id.current + 1)}>id 증가</button>
            <button onClick={printId}>현재 id 콘솔 출력</button>
        </div>
    );
};

export default RefSample;
