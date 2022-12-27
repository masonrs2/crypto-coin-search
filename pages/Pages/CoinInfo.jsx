// import React, { useEffect, useState } from 'react'
// import Footer from '../../components/Footer'
// import Image from 'next/image'
// import Navbar from '../../components/Navbar'
// import { Sparklines, SparklinesLine } from 'react-sparklines'; 
// import { useRouter } from 'next/router'
// import CoinStats from '../../components/CoinStats'
// import { RiArrowUpSFill, RiArrowDownSFill, RiArrowDownLine, RiArrowUpLine} from 'react-icons/ri'

// const CoinInfo = () => {
//   const [coin, setCoin] = useState({})
//   const [coinStats, setCoinStats] = useState([])
//   const router = useRouter()
//   const { id } = router.query

//   const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C%2024h%2C%207d`

//   const fetchCoin = async () => {
//     const data = await fetch(url) 
//     const coin = await data.json()
//     setCoin(coin[0])
//   }

//   useEffect(() => {
//     fetchCoin()
//     console.log('coin: ', coin[0])

//   },[url])

//   return (
    
//     <div className="w-full h-screen text-black bg-stone-200 px-6">
//         <Navbar />
//         <div className="bg-white rounded-lg shadow-lg xl:px-32 lg:px-16 border mt-8 px-6 pt-6 pb-10">

//         <div className="flex flex-col">
//             <span className="text-white bg-black w-20 text-sm p-[3px] text-center rounded-md mb-3 ">Rank #{coin.market_cap_rank}</span>
//           <div className="grid md:grid-cols-2 grid-cols-1">

//             <div className="flex flex-col">

//             <div className="flex flex-row items-center pb-2 ">
//               <img src={coin.image} alt={coin.name} width={35} height={35} />
//               <h1 className="pl-3 pr-2 font-bold text-2xl">{coin.name}</h1>
//               <p className="font-bold uppercase text-2xl">({coin.symbol})</p>
//             </div>

//             <div className="flex flex-row items-center">
//               <p className="text-3xl font-bold">${coin.current_price}</p>
//               <p className={`pl-2 ${coin.price_change_24 > 0 ? "text-green-600" : "text-red-600"
//             }`}>{coin.price_change_24 > 0 ? <RiArrowUpSFill size={37} /> : <RiArrowDownSFill size={37} />}</p>
//               <p className={`${coin.price_change_24 > 0 ? "text-green-600" : "text-red-600"
//             } font-bold ml-[-3px] text-xl`}>{Number(coin.price_change_24h).toFixed(2)}%</p>

//             </div>

//             <div className="flex flex-row items-center">
//               <div></div>
//                 <p className="text-gray-600 text-md pt-2 pb-[2px]">24h Price Change: <span className={`${coin.price_change_24 > 0 ? "text-green-600" : "text-red-600"
//               }`}>{coin.price_change_24h}</span></p>
//                 <span className={`pl-1 pt-2 ${coin.price_change_24 > 0 ? "text-green-600" : "text-red-600"
//             }`}>{ coin.price_change_24 > 0  ? <RiArrowUpLine className="font-bold" /> : <RiArrowDownLine className="font-bold" />} </span>
//             </div>
    
//                 <p className="text-gray-600 text-md ">Total Supply: {coin.total_supply} <span className="uppercase">{coin.symbol}</span></p>
//             </div>

//             <div>
//                 <CoinStats />
//             </div>
//           </div>

                

//                 <div className="pt-4">
//                   <Sparklines data={coin.sparkline_in_7d.price}>
//                           {
//                             coin.sparkline_in_7d.price[0] > coin.sparkline_in_7d.price[coin.sparkline_in_7d.price.length-1]
//                             ? 
//                             <SparklinesLine color='red' /> 
//                             : 
//                             <SparklinesLine color='teal' />
//                           }
                                      
//                   </Sparklines>
//                 </div>

//                 <div className="flex flex-col pt-6">
//                   <h1 className="font-semibold text-2xl pb-4">About {coin.name}</h1>
//                   <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam, quisquam quaerat quidem magni et, voluptate perferendis molestiae nam itaque ipsam dolore, soluta recusandae eius similique corporis blanditiis iusto repellat nobis. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus exercitationem maiores qui fugit aliquid molestias soluta iure magnam sint, a vel quos nihil. Veritatis ullam, minus beatae hic nesciunt dolorum!</p>
//                 </div>
                

//           </div>
//         </div>
//         <Footer />
//     </div>
//   )
// }

// export default CoinInfo