import { useCounterStore } from "../store/useCounterStore";

export default function Counter() {
    //3. 스토어에서 필요한 상태와 함수 꺼내오기(selector 패턴 사용)
    const count = useCounterStore((state) => state.count);
    const increase = useCounterStore((state) => state.increase);
    const decrease = useCounterStore((state) => state.decrease);
    const reset = useCounterStore((state) => state.reset);

    return (
        <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "8px" }}>
            <h2>카운터: {count}</h2>
            <div style={{ display: "flex", gap: "10px" }}>
                <button onClick={increase}>+1 증가</button>
                <button onClick={decrease}>-1 감소</button>
                <button onClick={reset}>초기화</button>
            </div>
        </div>
    );
}
