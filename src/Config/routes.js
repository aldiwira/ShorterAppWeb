import { Home, Login, Register, Main } from "../Scenes";

const routes = [
  {
    name: "main",
    path: "/",
    component: Home,
  },
  {
    name: "home",
    path: "/home",
    component: Main,
  },
  {
    name: "login",
    path: "/login",
    component: Login,
  },
  {
    name: "register",
    path: "/register",
    component: Register,
  },
];

export default routes;
