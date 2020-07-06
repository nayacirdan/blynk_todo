import {combineReducers} from "redux";
import tasks from "./taskReducer";
import item from "./itemReducer";


const reducer=combineReducers({
    tasks, item
})

export default reducer;