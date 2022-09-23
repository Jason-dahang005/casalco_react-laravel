import React from 'react'

import Sidebar from './Sidebar'
import Footer from './Footer'
import Topbar from './Topbar'

import routes2 from '../../routes/routes2'

import { Route, Switch, Redirect } from 'react-router-dom'

const OfficerLayout = () => {
  return (
    <div className="relative md:flex h-screen overflow-hidden">
      <Sidebar/>
      <div className="flex-1 h-screen overflow-y-auto">
        <Topbar/>
        <main className="relative p-3 min-h-full">
      <Switch>
        {routes2.map((route, idx) => {
          return (
            route.component && (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}
                render={(props) => (
                  <route.component {...props} />
                )}
              />
            )
          )
        })}
        <Redirect from="/admin" to="/admin/dashboard"/>
      </Switch>
      </main>
        <Footer/>
      </div>
    </div>
  )
}

export default OfficerLayout