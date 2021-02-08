const Axios = require("axios");

export const uri = `https://my-shorter.herokuapp.com/`;

export const Api = Axios.create({
  baseURL: uri,
});

export default Axios.create({
  baseURL: uri,
});
