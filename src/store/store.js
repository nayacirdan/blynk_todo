import reducer from "../reducers/reducer";
import {compose, createStore} from "redux";


const reduxDevTools = window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f;

const store = createStore(reducer,
    compose(reduxDevTools)
);

export default store