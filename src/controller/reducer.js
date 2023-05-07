import { ADD_CART } from "./type";

const initialStore = {
    carts: [],
}
export const cartReducer = (state = initialStore, action) => {
    switch (action.type) {
        case ADD_CART:
            return {
                ...state,
                carts: [...state.carts, action.payload]
            }
        default:
            return state
    }
}
