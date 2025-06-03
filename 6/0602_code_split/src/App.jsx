import React, { Suspense, useState } from "react";
import notify from "./notify";
import loadable from "@loadable/component";

const SplitMe = loadable(() => import("./SplitMe"), {
    fallback: <div>loading...</div>,
});
const App = () => {
    const [visible, setVisible] = useState(false);
    const onClick = () => {
        notify();
        setVisible(true);
    };

    const onMouseOver = () => {
        SplitMe.preload();
    };
    return (
        <div>
            <header>
                <img src="./assets/react.svg" alt="" />
                <p onClick={onClick} onMouseOver={onMouseOver}>
                    HELLO
                </p>
                {visible && <SplitMe />}
            </header>
        </div>
    );
};

export default App;
