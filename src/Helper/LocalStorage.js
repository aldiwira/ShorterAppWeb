const userKey = "userkey";
const tokenKey = "tokenKey";

const setItem = (key, data) => {
  localStorage.setItem(key, data);
};
const getItem = (key) => {
  return localStorage.getItem(key);
};
const clearAll = (key) => {
  localStorage.clear();
};

const LStorage = { setItem, getItem, clearAll };

export { userKey, tokenKey, LStorage };
