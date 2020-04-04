import {createStore} from "redux";
import rootReducer from "./index";
import {applyMiddleware} from "redux";
import thunk from "redux-thunk"


export default function configureStore() {
    return createStore(rootReducer,applyMiddleware(thunk))
}
