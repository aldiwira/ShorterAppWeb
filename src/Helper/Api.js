const Axios = require("axios");

const uri = `http://127.0.0.1:2000`;

export const Api = Axios.create({
  baseURL: uri,
});

export default Axios.create({
  baseURL: uri,
});
