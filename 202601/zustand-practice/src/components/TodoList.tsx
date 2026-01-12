import { useEffect, useState } from "react";
import { useTodoStore } from "../store/useTodoStore";

export default function TodoList() {
    const { todos, isLoading, addTodo, toggleTodo, fetchTodos } = useTodoStore();
    const [inputValue, setInputValue] = useState("");

    //컴포넌트 마운트 시 데이터 불러오기
    useEffect(() => {
        fetchTodos();
    }, [fetchTodos]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!inputValue.trim()) return;
        addTodo(inputValue);
        setInputValue("");
    };

    if (isLoading) return <div>데이터 불러오는중..</div>;

    return (
        <div style={{ marginTop: "20px", border: "1px solid #ccc", padding: "20px" }}>
            <h2>할 일 목록 ({todos.length}개)</h2>

            <form onSubmit={handleSubmit} style={{ marginBottom: "10px" }}>
                <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="할 일을 입력하세요"
                />
                <button type="submit">추가</button>
            </form>

            <ul>
                {todos.map((todo) => (
                    <li
                        key={todo.id}
                        onClick={() => toggleTodo(todo.id)}
                        style={{
                            textDecoration: todo.isDone ? "line-through" : "none",
                            cursor: "pointer",
                        }}
                    >
                        {todo.text}
                    </li>
                ))}
            </ul>
        </div>
    );
}
