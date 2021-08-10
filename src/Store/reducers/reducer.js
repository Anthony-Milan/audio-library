import * as actionTypes from "../actions/actionTypes";
const initialState={
    albums:[],
    error:false
}
const reducer = (state=initialState, action)=>{
    switch(action.type){
        case actionTypes.FETCH_ALBUMS:
        return {
            ...state,
            albums: action.albums,
            error:false
        }
        case actionTypes.FETCH_ALBUMS_FAILED:
        return{
            ...state,
            error:true
        };
        default:
        return state;
    }
}
export default reducer;