import { create } from "zustand";

// 1. 스토어의 타입(state+actions)정의
interface CounterState {
    count: number;
    increase: () => void;
    decrease: () => void;
    reset: () => void;
}

// 2. 스토어 생성(create 함수 사용)
export const useCounterStore = create<CounterState>((set) => ({
    //초기값 설정
    count: 0,

    //action 구현(set 함수로 상태 변경)
    //state는 현재 상태를 의미
    increase: () => set((state) => ({ count: state.count + 1 })),
    decrease: () => set((state) => ({ count: state.count - 1 })),

    //현재 값을 몰라도 되는 경우 그냥 값만 덮어씌울 수 있다
    reset: () => set({ count: 0 }),
}));
