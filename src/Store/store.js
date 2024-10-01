import {applyMiddleware, createStore} from "redux";
import authReducer from "../Reducers/authReducer.js";
import {composeWithDevTools} from "redux-devtools-extension";

const store = createStore(
    authReducer,
    composeWithDevTools(applyMiddleware(thunk))
)


export default store;