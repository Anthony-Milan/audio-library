import * as actionTypes from "./actionTypes";
import axios from "../../services";

export const fetchAlbumsSuccess = (Albums) => {
  return {
    type: actionTypes.FETCH_ALBUMS_SUCCESS,
    albums: Albums,
  };
};
export const fetchAlbumsStart = () => {
  return {
    type: actionTypes.FETCH_ALBUMS_START,
  };
};
export const fetchAlbumsFailed = (error) => {
  return {
    type: actionTypes.FETCH_ALBUMS_FAILED,
    error: error,
  };
};
export const initializeAlbums = () => {
  return (dispatch) => {
    dispatch(fetchAlbumsStart());
    axios
      .get(
        "/albums.json"
      )
      .then((response) => {
        const fetchedAlbums = [];
        for (let key in response.data) {
          fetchedAlbums.push({ ...response.data[key], id: key });
        }
        dispatch(fetchAlbumsSuccess(fetchedAlbums));
      }
      )
      .catch((error) => {
        dispatch(fetchAlbumsFailed(error));
      });
  };
};
