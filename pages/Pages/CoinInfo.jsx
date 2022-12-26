import React, { useEffect } from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { Sparklines, SparklinesLine } from 'react-sparklines'; 
import { useRouter } from 'next/router'

const CoinInfo = () => {
  const router = useRouter()
  const { name, id } = router.query

  return (
    
    <div className="w-full h-screen text-black bg-stone-200 px-6">
        <Navbar />
        <div className="bg-white rounded-lg shadow-lg xl:px-32 lg:px-16 border mt-8 px-6 pt-6 pb-10">

            <h1>Name: {name}</h1> 
            
        </div>
        <Footer />
    </div>
  )
}

export default CoinInfo