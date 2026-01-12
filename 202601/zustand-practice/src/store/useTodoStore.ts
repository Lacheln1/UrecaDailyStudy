import { create } from "zustand";

//todo 아이템 타입
interface Todo {
    id: number;
    text: string;
    isDone: boolean;
}

//스토어 타입
interface TodoStore {
    todos: Todo[];
    isLoading: boolean; //로딩 상태
    addTodo: (text: string) => void;
    toggleTodo: (id: number) => void;
    fetchTodos: () => Promise<void>; //비동기 액션
}

export const useTodoStore = create<TodoStore>((set, get) => ({
    todos: [],
    isLoading: false,

    // 1. 배열 추가(기존 배열 유지하면서 추가)
    addTodo: (text) =>
        set((state) => ({
            todos: [...state.todos, { id: Date.now(), text, isDone: false }],
        })),

    // 2. 배열 수정(map을 사용하여 특정 아이템만 변경)
    toggleTodo: (id) =>
        set((state) => ({
            todos: state.todos.map((todo) =>
                todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
            ),
        })),

    // 3. 비동기 통신
    fetchTodos: async () => {
        set({ isLoading: true }); //로딩 시작
        try {
            // 1초 뒤에 더미 데이터가 온다고 가정
            await new Promise((resolve) => setTimeout(resolve, 1000));

            const mockTodos = [
                { id: 1, text: "zustand 공부하기", isDone: true },
                { id: 2, text: "프로젝트 적용하기", isDone: false },
            ];

            set({ todos: mockTodos }); //데이터 저장
        } catch (error) {
            console.error(error);
        } finally {
            set({ isLoading: false }); //로딩 끝
        }
    },
}));
