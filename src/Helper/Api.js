const Axios = require("axios");

export const Api = Axios.create({
  baseURL: `http://127.0.0.1:2000`,
});
