import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AdminLayout from "./layouts/admin/AdminLayout"
import OfficerLayout from "./layouts/officer/OfficerLayout"


function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route path="/admin" name="Admin" render={(props) => <AdminLayout { ...props }/> }/>
          <Route path="/officer" name="Officer" render={(props) => <OfficerLayout {...props} /> }/>
          <Route exact path="/" component />
        </Switch>
      </Router>
    </>
  )
}

export default App
