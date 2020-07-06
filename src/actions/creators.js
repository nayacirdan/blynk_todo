import Actions from "./constants";

export const getToDoFromLS=(toDoList)=>{
    return {type:Actions.GET_TODO_FROM_LS, payload: toDoList}
}

export const addItem=(item)=>{
    return {type:Actions.ADD_NEW_ITEM, payload: item}
}
export const deleteItem=(item)=>{
    return {type:Actions.DELETE_ITEM, payload: item}
}

export const setCurrentItem=(item)=>{
    return {type:Actions.SET_CURRENT_ITEM, payload: item}
}
export const addComment=(comment, currentItem)=>{
    return {type:Actions.ADD_NEW_COMMENT, comment: comment, currentItem:currentItem}
}
export const increaseCommentsCounter=(item)=>{
    return {type:Actions.INCREASE_COMMENTS_COUNTER, payload:item};
}
export const addCommentToCurrent=(comment)=>{
    return {type:Actions.ADD_COMMENT_TO_CURRENT, payload:comment};
}