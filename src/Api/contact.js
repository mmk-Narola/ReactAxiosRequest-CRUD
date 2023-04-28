import axios from "axios";

const axiosBaseURL = axios.create({
  baseURL: " http://192.168.100.84:3003",
});

export default axiosBaseURL;
