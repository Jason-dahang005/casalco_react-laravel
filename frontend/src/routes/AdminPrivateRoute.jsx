import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Redirect, Route } from 'react-router-dom'
import swal from 'sweetalert'
import AdminLayout from '../layouts/admin/AdminLayout'
import { useHistory } from 'react-router-dom'

const AdminPrivateRoute = ({...rest}) => {

  const history = useHistory()

  const [authenticated, setAuthenticated] = useState(false)

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    axios.get(`/api/checkingAuthenticated`).then(res => {
      if(res.status === 200){
        setAuthenticated(true)
      }
      setLoading(false)
    })
    return () => {
      setAuthenticated(false)
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

  if(loading){
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
          authenticated ? 
          ( <AdminLayout { ...props }/> ) :
          ( <Redirect to={ { pathname: "/login", state: { from: location } } } /> )
        }
      />
    </>
  )
}

export default AdminPrivateRoute