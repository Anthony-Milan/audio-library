import axios from "axios";
const instance = axios.create({
  baseURL: "https://audio-library-ed318-default-rtdb.europe-west1.firebasedatabase.app/"
});
export default instance;
