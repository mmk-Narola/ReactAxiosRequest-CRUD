import axios from "axios";

const axiosBaseURL = axios.create({
  baseURL: "http://localhost:3000/",
});

export default axiosBaseURL;
