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
      swal("Unauthorized", err.response.data.message, "warning")
      history.push('/')
    }Promise.reject(err)
  })

  if(loading){
    return <div className="h-screen">
      <h1 className='flex justify-center items-center text-casalcoOrange text-4xl font-bold'>Loading ...</h1>
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