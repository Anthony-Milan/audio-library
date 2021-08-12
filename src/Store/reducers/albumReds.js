import * as actionTypes from "../actions/actionTypes";
const initialState={
    albums:[],
    error:false,
    loading: false
};
const reducer = (state = initialState, action)=>{
    switch(action.type){
        case actionTypes.FETCH_ALBUMS_SUCCESS:
        return {
            ...state,
            albums: action.albums,
            error:false,
            loading:false,
        }
        case actionTypes.FETCH_ALBUMS_FAILED:
        return{
            ...state,
            error:true,
            loading:false
        };
        case actionTypes.FETCH_ALBUMS_START:
        return{
            ...state,
            loading:true
        }
        default:
        return state;
    }
}
export default reducer;