import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AdminLayout from "./layouts/admin/AdminLayout"
import ClientLayout from "./layouts/client/ClientLayout"
import OfficerLayout from "./layouts/officer/OfficerLayout"
import Home from "./pages/client/home/Home"
import Login from "./pages/auth/login/Login"
import Register from "./pages/auth/register/Register"
import Membership from "./pages/client/membership/Membership"
import MembershipForm from "./pages/client/membership/MembershipForm"


function App() {

  return (
    <>
      <Router>
        <Switch>

          {/* ROUTES FOR ADMIN */}
          <Route path="/admin" name="Admin" render={(props) => <AdminLayout { ...props }/> }/>

          {/* ROUTES FOR OFFICER */}
          <Route path="/officer" name="Officer" render={(props) => <OfficerLayout {...props} /> }/>


          {/* ROUTES FOR CLIENT */}
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/membership" component={Membership} />
          <Route path="/membership-form" component={MembershipForm} />
        </Switch>
      </Router>
    </>
  )
}

export default App
