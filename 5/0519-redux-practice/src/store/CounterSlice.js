import { createSlice } from "@reduxjs/toolkit";

export const countersSlice = createSlice({
    //슬라이스 이름은 고유해야 한다. 일반적으로 해당 슬라이스가 관리하는 상태의 이름을 사용
    name: "counter",

    //초기 상태 정의
    initialState: {
        count: 0,
        label: "카운터",
    },

    //리듀서 정의. 리듀서는 상태를 변경하는 함수들을 정의함
    reducers: {
        increment: (state, action) => {
            state.count += action.payload || 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        resetCount: (state) => {
            state.count = 0;
        },
    },
});

//액션 생성자를 내보내 컴포넌트에서 사용할 수 있도록 한다
export const { increment, decrement, resetCount } = countersSlice.actions;
