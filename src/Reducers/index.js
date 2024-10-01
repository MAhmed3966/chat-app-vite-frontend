

import {combineReducers} from 'redux';
import authReducer from "./authReducer.js";


//this rootreducer is used to combine all the individual reducers

const rootReducer = combineReducers({
    auth: authReducer,
})
export default rootReducer;