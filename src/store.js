
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { formReducer } from "./reducers/formReducer";


const reducer = combineReducers({
    form: formReducer,

});
let initailState = {};
const middleware = [thunk];
const store = createStore(
    reducer,
    initailState,
    composeWithDevTools(applyMiddleware(...middleware))
);
export default store;