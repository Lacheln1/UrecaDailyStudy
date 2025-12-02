import { useState } from "react";

const PracticeUseEffect = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div>
            <button
                onClick={() => {
                    setVisible(!visible);
                }}
            >
                {visible ? "숨기기" : "보이기"}
            </button>
            <hr />
        </div>
    );
};

export default PracticeUseEffect;
