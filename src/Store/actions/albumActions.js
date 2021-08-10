import * as actionTypes from "./actionTypes";
import axios from "../../services"

export const fetchAlbums = (albums)=>{
    return{
        type: actionTypes.FETCH_ALBUMS,
        albums: albums
    }
}
export const fetchAlbumsFailed = ()=>{
    return{
        type: actionTypes.FETCH_ALBUMS_FAILED
    }
}
export const initializeAlbums =()=>{
    return dispatch =>{
        axios.get( 'https://audio-library-ed318-default-rtdb.europe-west1.firebasedatabase.app/albums.json')
            .then( response => {
               dispatch(fetchAlbums(response.data));
            } )
            .catch( error => {
                dispatch(fetchAlbumsFailed());
            } )
    }
}