const Axios = require("axios");

const uri = `http://192.168.0.105:2000`;

export const Api = Axios.create({
  baseURL: uri,
});

export default Axios.create({
  baseURL: uri,
});
