import React from 'react'
import { HiBars3 } from 'react-icons/hi'
import logo from "../assets/coin.png"
import Image from 'next/image'

const Navbar = () => {
    const [nav, setNav] = React.useState(false)

  return (
    <div className="w-full py-4   ">
        <div className="rounded-lg bg-white shadow-xl flex h-20 justify-between items-center py-4 px-4 lg:px-12">
            <h1 className="font-bold text-2xl" >CoinSearch</h1>
            <Image src={logo} width={130} height={30} />
            <div className="flex flex-row gap-3 px-2">
                <button className="font-medium">Log in</button>
                <button className="bg-lime-400 shadow-xl px-4 rounded-md py-2 text-white font-bold">Sign Up</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar