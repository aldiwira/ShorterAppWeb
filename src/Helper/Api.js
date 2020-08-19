const Axios = require("axios");

export const uri = `http://192.168.0.106:2000`;

export const Api = Axios.create({
  baseURL: uri,
});

export default Axios.create({
  baseURL: uri,
});
