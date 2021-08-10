import axios from "axios";
const instance = axios.create({
  baseUrl: "https://audio-library-ed318-default-rtdb.europe-west1.firebasedatabase.app/"
});
export default instance;
