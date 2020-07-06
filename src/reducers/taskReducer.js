import Actions from "../actions/constants";
import update from "react-addons-update";

const initialState=[];

const tasks=(state=initialState,action)=>{
    switch (action.type) {
        case Actions.ADD_NEW_ITEM: {
            return [...state, action.payload]
        }
        case Actions.DELETE_ITEM:{
            const itemToDel=action.payload;
            const itemIndex=state.indexOf(itemToDel);
            return update(state, {$splice: [[itemIndex, 1]]});
        }
        case Actions.GET_TODO_FROM_LS:{
            return JSON.parse(action.payload);
        }

        default: return state
    }
}


export default tasks;