import ApprovedLoan from "../pages/admin/approvedLoan/ApprovedLoan";
import ApprovedMembership from "../pages/admin/approvedMembership/ApprovedMembership";
import Dashboard from "../pages/admin/dashboard/Dashboard";
import LoanApplication from "../pages/admin/loan/LoanApplication";
import Members from "../pages/admin/members/Members";
import MembershipApplication from "../pages/admin/membershipApplication/MembershipApplication";

const routes = [
  { path: '/admin',                           exact: true, name: 'Admin' },
  { path: '/admin/dashboard',                 exact: true, name: 'Dashboard',                     component: Dashboard },
  { path: '/admin/membership-application',    exact: true, name: 'Membership Application',        component: MembershipApplication },
  { path: '/admin/loan-application',          exact: true, name: 'Loan Application',              component: LoanApplication },
  { path: '/admin/members',                   exact: true, name: 'Members',                       component: Members},
  { path: '/admin/approved-membership',        exact: true, name: 'Approved Membership',           component: ApprovedMembership },
  { path: '/admin/approved-loan',              exact: true, name: 'Approved Loan',                 component: ApprovedLoan }
]

export default routes