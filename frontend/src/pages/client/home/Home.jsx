import React from 'react'
import { Link } from 'react-router-dom'
import Index from '../../../components/client/home/Index'
import ProductLoans from '../../../components/client/home/ProductLoans'
import Units from '../../../components/client/home/Units'
import Footer from '../../../layouts/client/Footer'
import Header from '../../../layouts/client/Header'


const Home = () => {
  return (
    <>
    <Header/>
    <Index/>
    <ProductLoans/>
    <Units/>
    <Footer/>

    </>
  )
}

export default Home