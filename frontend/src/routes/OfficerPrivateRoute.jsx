import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Redirect, Route, useHistory } from 'react-router-dom'
import OfficerLayout from '../layouts/officer/OfficerLayout'
import swal from 'sweetalert'

const OfficerPrivateRoute = ({...rest}) => {

  const history = useHistory()

  const [auth, setAuth] = useState(false)

  const [load, setLoad] = useState(true)

  useEffect(() => {
    axios.get(`/api/checkingOfficer`).then(res => {
      if(res.status === 200){
        setAuth(true)
      }
      setLoad(false)
    })
    return () => {
      setAuth(false)
    }
  }, [])

  axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
    if(err.response.status === 401){
      history.push('/')
    }
    return Promise.reject(err)
  })

  axios.interceptors.response.use(function (response) {
    return response
    }, function (error) {
      if(error.response.status === 403){
        history.push('/403')
      }else if(error.response.status === 404){
        history.push('/404')
      }
      return  Promise.reject(error)
    }
  )

  if(load){
    return <div className="h-screen">
      <h1></h1>
    </div>
  }

  return (
    <>
      <Route
        {...rest}
        render = {
          ({props, location}) =>
          auth ?
          ( <OfficerLayout { ...props } /> ) :
          ( <Redirect to={ { pathname: "/login", state: { from:
            location } } } /> )
        }
      />
    </>
  )
}

export default OfficerPrivateRoute