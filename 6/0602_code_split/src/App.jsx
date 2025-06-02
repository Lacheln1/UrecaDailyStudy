import React, { Suspense, useState } from "react";
import notify from "./notify";
const SplitMe = React.lazy(() => import("./SplitMe"));

const App = () => {
    const [visible, setVisible] = useState(false);
    const onClick = () => {
        notify();
        setVisible(true);
    };
    return (
        <div>
            <header>
                <img src="./assets/react.svg" alt="" />
                <p onClick={onClick}>HELLO</p>
                <Suspense fallback={<div>loading...</div>}>{visible && <SplitMe />}</Suspense>
            </header>
        </div>
    );
};

export default App;
