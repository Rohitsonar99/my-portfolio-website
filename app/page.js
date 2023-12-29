"use client"
import React from 'react'
import Banner from './Components/Banner'
import { Middle } from './Components/Middle'
import Newslater from './Components/Newslater'
import { Footer } from './Components/Footer'
import { Lastfooter } from './Components/Lastfooter'


const page = () => {
 
  return (
    <>
      <Banner/>
      <Middle/>
      <Newslater/>
      <Footer/>
      <Lastfooter/>
      
    </>
  )
}

export default page