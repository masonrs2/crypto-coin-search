import React, { useEffect, useState } from 'react'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { Sparklines, SparklinesLine } from 'react-sparklines'; 
import Router from 'next/router'
import Link from 'next/link'
import Signup from '../pages/Pages/Signup'

import Image from 'next/image'

const CoinSearch = () => {
    const [coins, setCoins] = useState([])
    const [coin, setCoin] = useState({})
    const [toggle, setToggle] = useState(false)
    // const [name, setName] = useState("Mason..")
    const [search, setSearch] = useState("")
    const [savedCoin, setSavedCoin] = useState(false)

    function sendProps() {
        console.log('coin: ', coin)
        Router.push({
            pathname: "/Pages/CoinInfo",
            query: {
                name,
                coin
            }
        })
    }


    const saveCoin = async () => {
        if (user?.email) {
          setSavedCoin(true);
          await updateDoc(coinPath, {
            watchList: arrayUnion({
              id: coin.id,
              name: coin.name,
              image: coin.image,
              rank: coin.market_cap_rank,
              symbol: coin.symbol,
            }),
          });
        } else {
          alert('Please sign in to save a coin to your watch list');
        }
      };

    const coinGeckoUrl = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C%2024h%2C%207d'

    const fetchCoins = async () => { 
        const data = await fetch(coinGeckoUrl)
        const coins = await data.json()
        setCoins(coins)
    }

    

    useEffect(() => {
        fetchCoins()
    }, [coinGeckoUrl])

  return (
    <div className="bg-white rounded-lg shadow-lg xl:px-32 lg:px-16 border py-10 ">
        <div className="flex flex-col border border-gray-500/20 rounded-lg">
            <h2 className="text-center font-semibold text-2xl py-2" >Search Crypto</h2>

            <div className="px-4 py-2">
                <input 
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search a Coin"
                className="bg-gray-100 rounded-lg px-4 w-full shadow-lg py-2 text-lg border border-gray-300 outline-none"
                />
            </div>

            <div className="py-4 mx-4">
                <table className="w-full border-collapse text-center ">
                <thead className="">
                    <tr className='border-b'>
                        <th></th>
                        <th className='px-4'>#</th>
                        <th className='text-left'>Coin</th>
                        <th></th>
                        <th>Price</th>
                        <th>24h</th>
                        <th className='hidden md:table-cell'>24h Volume</th>
                        <th className='hidden sm:table-cell'>Mkt</th>
                        <th>Last 7 Days</th>
                    </tr>
                </thead>
                    <tbody className="">
                        {
                            coins.filter((coin) => {
                                if(search === ""){
                                    return coin
                                }
                                else {
                                    return coin.name.toLowerCase().includes(search.toLowerCase())
                                }
                            
                            }).map((coin, id) => (
                                <tr key={coin.id} className='h-[80px] border-b overflow-hidden hover:scale-95 duration-300 cursor-pointer '>
                                <td onClick={saveCoin}>
                                    {savedCoin ? <AiFillStar size={18} /> : <AiOutlineStar size={18} />}
                                </td>
                                <td>{coin.market_cap_rank}</td>
                                <td>
                                
                                    <Link href={`/Pages/CoinInfo?id=${coin.id}&name=${coin.name}`} passHref>
                                        <div className='flex items-center'>
                                            <div>
                                                <img
                                                onClick={() => setSavedCoin(!savedCoin)}
                                                className='w-6 mr-2 rounded-full'
                                                src={coin.image}
                                                alt={coin.id}
                                                />
                                                
                                            </div>
                                            <p className='hidden sm:table-cell'>{coin.name} <span className="text-gray-500 px-1 uppercase">{coin.symbol}</span></p>
                                        </div>
                                    </Link>
                            
                                </td>
                                <td></td>
                                <td>${coin.current_price.toLocaleString()}</td>
                                <td>
                                    {coin.price_change_percentage_24h > 0 ? (
                                    <p className='text-green-600'>
                                        {coin.price_change_percentage_24h.toFixed(2)}%
                                    </p>
                                    ) : (
                                    <p className='text-red-600'>
                                        {coin.price_change_percentage_24h.toFixed(2)}%
                                    </p>
                                    )}
                                </td>
                                <td className='w-[180px] hidden md:table-cell'>
                                    ${coin.total_volume.toLocaleString()}
                                </td>
                                <td className='w-[180px] hidden sm:table-cell'>
                                    ${coin.market_cap.toLocaleString()}
                                </td>
                                <td>
                                   <Sparklines data={coin.sparkline_in_7d.price}>
                                    {
                                    coin.sparkline_in_7d.price[0] > coin.sparkline_in_7d.price[coin.sparkline_in_7d.price.length-1]
                                    ? 
                                    <SparklinesLine color='red' /> 
                                    : 
                                    <SparklinesLine color='teal' />
                                    }
                                    
                                   </Sparklines>
                                
                                </td>
                                </tr>
                                ))
                            }
                    </tbody>
                </table>
            </div>
            
        </div>
    </div>
  )
}

export async function getStaticProps() { 
    const data = await fetch(coinGeckoUrl)
    const coins = await data.json()
    
    return {
        props: {
            posts: coins,
        }
    }
}

export default CoinSearch