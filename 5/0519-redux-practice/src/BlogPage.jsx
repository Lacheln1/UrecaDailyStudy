import React from "react";
import { useSelector } from "react-redux";

const BlogPage = () => {
    const countData = useSelector((state) => state.counter);
    console.log(countData);

    return (
        <main>
            <h2>BlogPage</h2>
            <div>
                <h3>redux 연습</h3>
                <p>count: {countData.count}</p>
            </div>
        </main>
    );
};

export default BlogPage;
