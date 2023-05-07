import { legacy_createStore } from "redux";
import root from "./main";

const store = legacy_createStore(root)
export default store;