import React, { useEffect } from 'react'
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import { Sparklines, SparklinesLine } from 'react-sparklines'; 
import { useRouter } from 'next/router'

const CoinInfo = () => {
  const router = useRouter()

  const {
    query: { name, coin },
  } = router

  const props = {
     name, 
     coin,
    };

  return (
    
    <div className="w-full h-screen text-black bg-stone-200 px-6">
        <Navbar />
        <div className="bg-white rounded-lg shadow-lg xl:px-32 lg:px-16 border mt-8 px-6 pt-6 pb-10">

        {/* <Sparklines data={props.coin.sparkline_in_7d.price}>
                                    {
                                    props.coin.sparkline_in_7d.price[0] > props.coin.sparkline_in_7d.price[props.coin.sparkline_in_7d.price.length-1]
                                    ? 
                                    <SparklinesLine color='red' /> 
                                    : 
                                    <SparklinesLine color='teal' />
                                    }
                                    
                                   </Sparklines> */}
            <h1>{props.name}</h1>
            <h1>{props.coin.name}</h1>
           
            
        </div>

        <Footer />
    </div>
  )
}

export default CoinInfo