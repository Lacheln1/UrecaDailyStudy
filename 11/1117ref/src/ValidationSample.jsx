import React, { useState } from "react";

const ValidationSample = () => {
    const [names, setNames] = useState([
        { id: 1, text: "눈사람" },
        { id: 2, text: "얼음" },
        { id: 3, text: "눈" },
        { id: 4, text: "바람" },
    ]);

    const [inputText, setInputText] = useState("");
    const [nextId, setNextId] = useState(5);

    const onChange = (e) => setInputText(e.target.value);
    const onClick = () => {
        const nextNames = [
            ...names,
            {
                id: nextId,
                text: inputText,
            },
        ];
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText("");
    };

    const onRemove = (id) => {
        const nextNames = names.filter((name) => name.id !== id);
        setNames(nextNames);
    };
    const namesList = names.map((name) => (
        <li key={name.id} onDoubleClick={() => onRemove(name.id)}>
            {name.text}
        </li>
    ));
    return (
        <div>
            <input type="text" value={inputText} onChange={onChange} />
            <div>{namesList}</div>
            <button onClick={onClick}>클릭</button>
        </div>
    );
};

export default ValidationSample;
