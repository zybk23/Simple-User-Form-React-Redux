import {combineReducers} from "redux";
import usersReducer from "./usersReducer";
import addUserReducer from "./addUserReducer";



const rootReducer=combineReducers({
    usersReducer,
    addUserReducer,


});

export default rootReducer;