// return {
//     ...state,
//     carts: [...state.carts, action.payload]
// }

import { ADD_CART, REMOVE } from "./type";

const initialStore = {
    carts: [],
}
export const cartReducer = (state = initialStore, action) => {
    switch (action.type) {
        case ADD_CART:
            const itemIndex = state.carts.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.carts[itemIndex].qty += 1
            } else {
                const temp = { ...action.payload, qty: 1 }
                return {
                    ...state,
                    carts: [...state.carts, temp],
                }
            }

        case REMOVE:
            const data = state.carts.filter((item) => item.id !== action.payload)
            return {
                ...state,
                carts: data
            }

        default:
            return state
    }
}
