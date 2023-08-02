import axios from "axios";

const axiosInstnce = axios.create({
  baseURL: "https://apt-booking-api.herokuapp.com/",
});

export default axiosInstnce;
