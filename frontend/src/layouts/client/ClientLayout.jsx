import React from 'react'
import Home from '../../pages/client/home/Home'
import Footer from './Footer'
import Header from './Header'

import { Route, Switch, Redirect } from 'react-router-dom'
import routes3 from '../../routes/routes3'

const ClientLayout = () => {
  return (
    <>
    <Header/>
    <main>
      <Switch>
        {routes3.map((route,idx) => {
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
        <Redirect from="/" to="/"/>
      </Switch>
    </main>
    <Footer/>
    </>
  )
}

export default ClientLayout