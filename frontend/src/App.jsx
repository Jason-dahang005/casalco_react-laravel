import React from "react"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AdminLayout from "./layouts/admin/AdminLayout"


function App() {

  return (
    <>
      <Router>
        <Switch>
          <Route path="/admin" name="Admin" render={(props) => <AdminLayout { ...props }/> }/>
        </Switch>
      </Router>
    </>
  )
}

export default App
