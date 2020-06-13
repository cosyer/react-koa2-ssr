import axios from "axios";

const serverAxios = axios.create({
  baseURL: "http://localhost:3000",
});

export default serverAxios;
