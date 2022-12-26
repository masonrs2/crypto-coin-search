import React, { useState } from 'react'
import { HiBars3 } from 'react-icons/hi'
import logo from "../assets/coin.png"
import Image from 'next/image'
import Link from 'next/link'
import Router from 'next/router'
import Signup from '../pages/Pages/Signup'
import { AuthContextProvider } from "../context/AuthContext"

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const [toggle, setToggle] = useState(false)
    const [name, setName]= useState('name')

    const toggleSignUp = () => {
      toggle ? setToggle(false) : setToggle(true)
    }

    function sendProps() {
      Router.push({
        pathname: "/Pages/Signup",
        query: { 
          name,
          setName,
          toggle,
          setToggle
        },
      })
    }
    

  return (
    <div className="w-full py-4   ">
        <div className="rounded-lg bg-white shadow-xl flex h-20 justify-between items-center py-4 px-4 lg:px-12">
          <Link href="/">
            <h1 className="font-bold text-2xl" >CoinSearch</h1>
          </Link>
            <Image src={logo} width={130} height={30} />
            <div className="flex flex-row gap-3 px-2">
                <button className="font-medium">Log in</button>
        
                  <button onClick={() => sendProps()} className="bg-lime-400 shadow-xl px-4 rounded-md py-2 text-white font-bold">Sign Up</button>
            </div>
            
            
        </div>
        {/* <div className="z-[100]">
                {
                    toggle && (
                    <AuthContextProvider>
                      <Signup toggleSignUp={toggleSignUp} />
                    </AuthContextProvider>
                    )
                }
        </div> */}
    </div>
  )
}

export default Navbar