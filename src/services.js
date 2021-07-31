import axios from "axios";
const getAlbums = async () => {
  try {
    return await axios
      .get("http://192.168.1.11/api/albums/getAlbums")
      .then((response) => this.setState(response));
  } catch (e) {
    if (e.message) {
      throw e.message;
    } else {
      throw e;
    }
  }
};
export default getAlbums;
