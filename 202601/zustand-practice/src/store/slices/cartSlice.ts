import { StateCreator } from "zustand";
import { immer } from "zustand/middleware/immer";

export interface Product {
    id: string;
    name: string;
    price: number;
    image: string;
}

export interface CartItem extends Product {
    quantity: number;
}

export interface CartSlice {
    items: CartItem[];
    total: number;

    //actions
    addItem: (product: Product) => void;
    removeItem: (productId: string) => void;
    updateQuantity: (productId: string, quantity: number) => void;
    clearCart: () => void;

    //computed values(selectors)
    getItemCount: () => number;
}

export const createCartSlice: StateCreator<CartSlice, [["zustand/immer", never]], [], CartSlice> =
    immer((set, get) => ({
        items: [],
        total: 0,

        addItem: (product) =>
            set((state) => {
                const existingItem = state.items.find((item) => item.id === product.id);

                if (existingItem) {
                    existingItem.quantity += 1;
                } else {
                    state.items.push({ ...product, quantity: 1 });
                }

                //총액 재계산
                state.total = state.items.reduce(
                    (sum, item) => sum + item.price * item.quantity,
                    0
                );
            }),

        removeItem: (productId) =>
            set((state) => {
                state.items = state.items.filter((item) => item.id !== productId);
                state.total = state.items.reduce(
                    (sum, item) => sum + item.price * item.quantity,
                    0
                );
            }),

        updateQuantity: (productId, quantity) =>
            set((state) => {
                const item = state.items.find((item) => item.id === productId);

                if (item) {
                    if (quantity <= 0) {
                        state.items = state.items.filter((i) => i.id !== productId);
                    } else {
                        item.quantity = quantity;
                    }
                    state.total = state.items.reduce(
                        (sum, item) => sum + item.price * item.quantity,
                        0
                    );
                }
            }),
        clearCart: () =>
            set((state) => {
                state.items = [];
                state.total = 0;
            }),
        getItemCount: () => {
            return get().items.reduce((sum, item) => sum + item.quantity, 0);
        },
    }));
