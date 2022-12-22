import React from 'react'
import { HiBars3 } from 'react-icons/hi'

const Navbar = () => {
    const [nav, setNav] = React.useState(false)

  return (
    <div className="w-full py-4  ">
        <div className="rounded-lg bg-white shadow-xl flex justify-between items-center py-2 px-4">
            <h1 className="font-bold text-2xl" >CyptoSearch</h1>
            <div className="  ">
                <input 
                type="text" 
                placeholder="Search Coin" 
                className="bg-gray-200 rounded-lg mr-2 px-4 w-40 outline-none lg:flex hidden border border-gray-300"  
                />
            </div>


        </div>
    </div>
  )
}

export default Navbar