import Actions from "../actions/constants";

const initialState={}

const item=(state=initialState, action)=>{
    switch (action.type) {
        case Actions.SET_CURRENT_ITEM:{
            return action.payload
        }
        case Actions.ADD_COMMENT_TO_CURRENT:{
            const newComment=action.payload;
            const prevCommentsList=state.comments;
            prevCommentsList.push(newComment);
            return {...state, comments:prevCommentsList}
        }
        default: return state
    }

}

export default item