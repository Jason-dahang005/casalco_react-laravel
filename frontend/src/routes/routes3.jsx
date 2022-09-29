import Login from "../pages/auth/login/Login"
import Register from "../pages/auth/register/Register"
import Home from "../pages/client/home/Home"
import Membership from "../pages/client/membership/Membership"

const routes3 = [
  { path: "/",              exact: true,     name: "Home",        component: Home},
  { path: "/login",         exact: true,     name: "Login",       component: Login },
  { path: "/register",      exact: true,     name: "Register",    component: Register },
  { path: "/membership",    exact: true,     name: "Membership",  component: Membership },
]

export default routes3