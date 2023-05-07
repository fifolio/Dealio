import { ADD_CART } from "./type"

export const ADD = (item) => {
    return {
        type: ADD_CART,
        payload: item,
    }
}
