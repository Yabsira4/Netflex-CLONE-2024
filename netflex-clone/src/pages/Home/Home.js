import React from 'react'
import Footer from '../../Components/Footer/footer'
import Header from '../../Components/Header/header'
import Banner from '../../Components/Banner/Banner'
import Rowlist from '../../Components/Rows/Rowlist/Rowlist'
const Home = () => {
  return (
    <div>
      <Header />
      <Banner/>
      <Rowlist/>
      <Footer/>
     
  </div>
  )
}

export default Home