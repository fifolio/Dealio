import { cartReducer } from "./reducer"

const root = combinReducers({
    cartReducer,
})

export default root