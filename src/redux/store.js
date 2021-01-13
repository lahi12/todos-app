import { createStore } from "redux";
import todosReducer from "./reducers/TodosReducer";

const store = createStore(todosReducer);

export default store;
