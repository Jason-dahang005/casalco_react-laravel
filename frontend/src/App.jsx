import React from "react"
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import AdminLayout from "./layouts/admin/AdminLayout"
import ClientLayout from "./layouts/client/ClientLayout"
import OfficerLayout from "./layouts/officer/OfficerLayout"
import Home from "./pages/client/home/Home"
import Login from "./pages/auth/login/Login"
import Register from "./pages/auth/register/Register"
import Membership from "./pages/client/membership/Membership"
import MembershipForm from "./pages/client/membership/MembershipForm"
import Example from "./Example"
import AdminPrivateRoute from "./routes/AdminPrivateRoute"
import Page403 from "./pages/error/Page403"
import OfficerPrivateRoute from "./routes/OfficerPrivateRoute"

import axios from 'axios'
import Page404 from "./pages/error/Page404"

axios.defaults.baseURL = "http://127.0.0.1:8000"
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['Accept'] = 'application/json'
axios.defaults.withCredentials = true;

axios.defaults.withCredentials = true
axios.interceptors.request.use(function (config){
  const token = localStorage.getItem('auth_token')
  config.headers.Authorization = token ? `Bearer ${token}` : ''
  return config
})


function App() {

  return (
    <>
      <Router>
        <Switch>

          {/* ROUTES FOR ADMIN */}
          {/* <Route path="/admin" name="Admin" render={(props) => <AdminLayout { ...props }/> }/> */}
          <AdminPrivateRoute path="/admin" name="Admin"/>

          {/* ROUTES FOR OFFICER */}
          {/* <Route path="/officer" name="Officer" render={(props) => <OfficerLayout {...props} /> }/> */}
          <OfficerPrivateRoute path="/officer" name="Officer"/>


          {/* ROUTES FOR CLIENT */}
          <Route exact path="/" component={Home} />
          {/* <Route path="/login" component={Login} /> */}

          <Route path='/login'>
            { localStorage.getItem('auth_token') ? <Redirect to="/" /> : <Login/> }
          </Route>

          <Route path='/register'>
            { localStorage.getItem('auth_token') ? <Redirect to="/" /> : <Register/> }
          </Route>


          {/* <Route path="/register" component={Register} /> */}
          <Route path="/membership" component={Membership} />
          <Route path="/membership-form" component={MembershipForm} />
          <Route path="/example" component={Example} />

          <Route path="/403" component={Page403} />
          <Route path="/404" component={Page404} />
        </Switch>
      </Router>
    </>
  )
}

export default App
