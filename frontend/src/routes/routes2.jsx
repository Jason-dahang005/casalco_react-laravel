import Dashboard from "../pages/officer/dashboard/Dashboard"

const routes2 = [
  { path: "/officer",              exact: true, name: "Officer"},
  { path: "/officer/dashboard",    exact: true, name: "Dashboard",       component: Dashboard }
]

export default routes2