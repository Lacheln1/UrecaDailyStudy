import { useReducer } from "react";

//리듀서 함수 정의
function cartReducer(state, action) {
    //state : 현재 상태
    //action : 어떤 동작을 할지 알려주는 객체
    switch (action.type) {
        case "ADD_ITEM":
            return [...state, action.item];

        case "REMOVE_ITEM":
            return state.filter((item) => item.id !== action.id);

        case "CLEAR_CART":
            return [];

        default:
            return state;
    }
}

const ShoppingCart = () => {
    // [현재상태, 액션을보내는함수] = useReducer(정의 한 리듀서함수, 초기값)
    const [cart, dispatch] = useReducer(cartReducer, []);

    const addItem = () => {
        const newItem = {
            id: Date.now(),
            name: "상품" + (cart.length + 1),
            price: Math.floor(Math.random() * 10000),
        };
        dispatch({ type: "ADD_ITEM", item: newItem });
    };
    return (
        <div>
            <h2>장바구니({cart.length}개)</h2>
            <button onClick={addItem}>상품 추가</button>
            <button onClick={() => dispatch({ type: "CLEAR_CART" })}>전체 삭제</button>

            <ul>
                {cart.map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.price}원
                        <button onClick={() => dispatch({ type: "REMOVE_ITEM", id: item.id })}>
                            삭제
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ShoppingCart;
