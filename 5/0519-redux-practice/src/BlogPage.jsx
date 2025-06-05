import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, resetCount } from "./store/CounterSlice";
import Counter from "./Counter";

const BlogPage = () => {
    const countData = useSelector((state) => state.counter);
    //액션을 redux 스토어에 보내는 역할
    const dispatch = useDispatch();
    console.log(countData);

    const increase = (num = 1) => {
        dispatch(increment(num));
    };

    const decrease = () => {
        dispatch(decrement());
    };

    const reset = () => {
        dispatch(resetCount());
    };

    return (
        <main>
            <h2>BlogPage</h2>
            <div>
                <h3>redux 연습</h3>
                <Counter />
                <Counter />
                <Counter />
                <button onClick={() => increase()}>증가</button>
                <button onClick={decrease}>감소</button>
                <button onClick={() => increase(10)}>10씩증가</button>
                <button onClick={reset}>리셋</button>
            </div>
        </main>
    );
};

export default BlogPage;
