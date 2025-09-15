import React from 'react'
import Footer from '../component/home-component/Footer'
import Header from '../component/home-component/Header.jsx'
import Welcome from '../component/home-component/Welcome.jsx'
import Ourservice from '../component/other/Ourservice.jsx'
import Services from '../component/home-component/Services.jsx'

const HomeLayout = () => {
  return (
    <div>
        <div>
          <Header/>
            <Welcome/>
            <Ourservice/>
            <Services/>
          <Footer/>
        </div>
    </div>
  )
}

export default HomeLayout