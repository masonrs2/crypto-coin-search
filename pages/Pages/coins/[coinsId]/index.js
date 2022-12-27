import React, { useEffect, useState } from "react";
import Footer from "../../../../components/Footer";
import Image from "next/image";
import Navbar from "../../../../components/Navbar";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { useRouter } from "next/router";
import CoinStats from "../../../../components/CoinStats";
import {
  RiArrowUpSFill,
  RiArrowDownSFill,
  RiArrowDownLine,
  RiArrowUpLine,
} from "react-icons/ri";

const CoinInfo = () => {
  const [coin, setCoin] = useState([]);
  const [newCoin, setNewCoin] = useState({})

  const [coinStats, setCoinStats] = useState([]);
  const router = useRouter();
  const { id } = router.query;
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C%2024h%2C%207d`;

  useEffect(() => {
    if (!url ) {
      window.location.reload();
      return;
    }

    const fetchCoin = async () => {
      const id = router.query.id;
      const data = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${id}&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C%2024h%2C%207d`
      );
      const coin = await data.json();
      console.log("coin: ", coin[0]);
      console.log("Id: ", id);
      setCoin(coin);
    };

    const fetchNewCoin = async () => {
      const id = router.query.id;
      const data = await fetch(`https://api.coingecko.com/api/v3/coins/${id}?localization=true&tickers=true&market_data=true&community_data=false&sparkline=true
      `)
      const newCoin = await data.json()
      console.log("NewCoin: " , newCoin)
      setNewCoin(newCoin)
      
    }
    fetchCoin();
    fetchNewCoin();
  }, [router.isReady, id, router.query.id, url]);

  return (
    <div className="w-full h-screen text-black bg-stone-200 px-6">
      <Navbar />
      <div className="bg-white rounded-lg shadow-lg xl:px-32 lg:px-16 border mt-8 px-6 pt-6 pb-10">
        {coin.map((coin) => (
          <div key={coin.name} className="flex flex-col">
            <span className="text-white mt-5 bg-black w-20 text-sm p-[3px] text-center rounded-md mb-3 ">
              Rank #{coin.market_cap_rank}
            </span>
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6 md:gap-0">
              <div className="flex flex-col">
                <div className="flex flex-row items-center pb-2 ">
                  <img
                    src={coin.image}
                    alt={coin.name}
                    width={35}
                    height={35}
                  />
                  <h1 className="pl-3 pr-2 font-bold text-2xl">{coin.name}</h1>
                  <p className="font-bold uppercase text-2xl">
                    ({coin.symbol})
                  </p>
                </div>

                <div className="flex flex-row items-center">
                  <p className="text-3xl font-bold">${coin.current_price}</p>
                  <p
                    className={`pl-2 ${
                      coin.price_change_24 > 0
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {coin.price_change_24 > 0 ? (
                      <RiArrowUpSFill size={37} />
                    ) : (
                      <RiArrowDownSFill size={37} />
                    )}
                  </p>
                  <p
                    className={`${
                      coin.price_change_24 > 0
                        ? "text-green-600"
                        : "text-red-600"
                    } font-bold ml-[-3px] text-xl`}
                  >
                    {Number(coin.price_change_percentage_24h).toFixed(2)}%
                  </p>
                </div>

                <div className="flex flex-row items-center">
                  <div></div>
                  <p className="text-gray-600 text-md pt-2 pb-[2px]">
                    24h Price Change:{" "}
                    <span
                      className={`${
                        coin.price_change_24 > 0
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {coin.price_change_24h}
                    </span>
                  </p>
                  <span
                    className={`pl-1 pt-2 ${
                      coin.price_change_24 > 0
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {coin.price_change_24 > 0 ? (
                      <RiArrowUpLine className="font-bold" />
                    ) : (
                      <RiArrowDownLine className="font-bold" />
                    )}{" "}
                  </span>

                </div>
                  <p className="flex flex-row items-center text-gray-600 text-md pb-[2px]">
                    Total Supply: <span className="ml-1 uppercase">{coin.total_supply} {" "} {coin.symbol} </span>
                  </p>
                
                {/* <div className="flex flex-row text-center items-center"> 
                <p className="text-gray-600 text-md font-light  ">
                  {newCoin.market_data.current_price.btc}{" "}
      
                    <span className="uppercase">BTC</span> { " "}
                    <span className={`${newCoin.market_data.price_change_percentage_24h_in_currency.btc > 0 ? "text-green-600" : "text-red-600"}`}>
                    <span> {newCoin.market_data.price_change_percentage_24h_in_currency.btc.toFixed(1)}%  
                    </span>
                  
                  </span>

                </p>
                <span className={`${newCoin.market_data.price_change_percentage_24h_in_currency.eth > 0 ? "text-green-600" : "text-red-600"}`}>
                { newCoin.market_data.price_change_percentage_24h_in_currency.eth > 0 
                    ?
                    <RiArrowUpLine className="font-bold" /> 
                    : 
                    <RiArrowDownLine className="font-bold" />
                     }
                </span>
                </div>

                <div className="flex flex-row text-center items-center"> 
                <p className="text-gray-600 text-md font-light  ">
                  {newCoin.market_data.current_price.eth}{" "}
      
                    <span className="uppercase">ETH</span> { " "}
                    <span className={`${newCoin.market_data.price_change_percentage_24h_in_currency.eth > 0 ? "text-green-600" : "text-red-600"}`}>
                    <span> {newCoin.market_data.price_change_percentage_24h_in_currency.eth.toFixed(1)}%  
                    </span>
                  
                  </span>

                </p>
                <span className={`${newCoin.market_data.price_change_percentage_24h_in_currency.eth > 0 ? "text-green-600" : "text-red-600"}`}>
                { newCoin.market_data.price_change_percentage_24h_in_currency.eth > 0 
                    ?
                    <RiArrowUpLine className="font-bold" /> 
                    : 
                    <RiArrowDownLine className="font-bold" />
                     }
                </span>
                </div> */}

              </div>

              <div className="">
                <CoinStats newCoin={newCoin} coin={coin} />
              </div>
            </div>

            <div className="pt-8">
              <h1 className="font-bold text-2xl text-center">7 Day Line Chart of {coin.name}</h1>
              <Sparklines data={coin.sparkline_in_7d.price}>
                          {
                            coin.sparkline_in_7d.price[0] > coin.sparkline_in_7d.price[coin.sparkline_in_7d.price.length-1]
                            ? 
                            <SparklinesLine color='red' /> 
                            : 
                            <SparklinesLine color='teal' />
                          }
                                      
                  </Sparklines>
            </div>

            <div className="flex flex-col pt-6">
              <h1 className="font-semibold text-2xl pb-4">About {coin.name}</h1>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Urna nec tincidunt praesent semper. Quisque sagittis purus sit amet volutpat. Nullam ac tortor vitae purus. Diam ut venenatis tellus in metus vulputate eu scelerisque felis. Augue neque gravida in fermentum et sollicitudin ac orci phasellus. Tempor nec feugiat nisl pretium fusce. Id neque aliquam vestibulum morbi blandit cursus. Est ultricies integer quis auctor elit sed vulputate mi. Eu nisl nunc mi ipsum. Suspendisse in est ante in. Tortor at risus viverra adipiscing at in tellus. At in tellus integer feugiat scelerisque varius morbi enim nunc.

Elit sed vulputate mi sit amet mauris commodo quis imperdiet. Erat imperdiet sed euismod nisi porta lorem mollis aliquam ut. Nunc non blandit massa enim nec dui nunc mattis. Nisl nunc mi ipsum faucibus vitae aliquet nec. Aliquet nec ullamcorper sit amet risus. Dictumst vestibulum rhoncus est pellentesque elit. Magna sit amet purus gravida quis. Dolor purus non enim praesent elementum facilisis leo vel. Metus dictum at tempor commodo ullamcorper. Ornare arcu odio ut sem nulla pharetra diam. Porta lorem mollis aliquam ut porttitor leo a diam sollicitudin. Semper risus in hendrerit gravida. Integer eget aliquet nibh praesent tristique magna sit amet purus.

Pulvinar neque laoreet suspendisse interdum consectetur libero id. Lacus laoreet non curabitur gravida. Tristique et egestas quis ipsum suspendisse ultrices gravida dictum. Vel turpis nunc eget lorem dolor. Ut porttitor leo a diam sollicitudin tempor id eu. Blandit turpis cursus in hac habitasse platea. Imperdiet massa tincidunt nunc pulvinar sapien et. Nunc id cursus metus aliquam eleifend mi in. Porttitor lacus luctus accumsan tortor posuere. Dapibus ultrices in iaculis nunc sed augue lacus. Nibh mauris cursus mattis molestie a iaculis at erat pellentesque. Condimentum vitae sapien pellentesque habitant. Rutrum quisque non tellus orci ac auctor augue mauris. Aliquet risus feugiat in ante metus dictum at. Id diam maecenas ultricies mi.

Amet massa vitae tortor condimentum lacinia quis vel eros. Cras sed felis eget velit. Aliquam malesuada bibendum arcu vitae elementum. In nulla posuere sollicitudin aliquam. Feugiat nisl pretium fusce id velit ut. Non quam lacus suspendisse faucibus interdum. Est pellentesque 
              </p>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default CoinInfo;
