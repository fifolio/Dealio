import { ADD_CART } from "./type";

const initialStore = {
    carts: [],
}

export const cartReducer = (state = initialStore, action) => {
    switch (action) {
        case ADD_CART:
            return {
                ...state,
                carts: [...state.carts, action.payload]
            }
        default:
            return state
    }
}
