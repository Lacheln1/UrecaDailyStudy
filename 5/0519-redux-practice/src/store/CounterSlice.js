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
    reducers: {},
});
