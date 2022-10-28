import Dashboard from "../pages/officer/dashboard/Dashboard"
import PendingMembershipApplication from "../pages/officer/membershipApplication/PendingMembershipApplication"

const routes2 = [
  { path: "/officer",                                 exact: true, name: "Officer"},
  { path: "/officer/dashboard",                       exact: true, name: "Dashboard",               component: Dashboard },
  { path: "/officer/membership-application-list",     exact: true, name: "Membership Application",  component: PendingMembershipApplication }
]

export default routes2