import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router' 
import Navbar from "../../components/Navbar"
import google from "../../assets/google.png"
import Image from 'next/image'
import Footer from '../../components/Footer'
import { FaUserCircle } from 'react-icons/fa'
import { AuthContextProvider, UserAuth } from "../../context/AuthContext"
import router from 'next/router'


const Signup = () => {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const { signUp, googleSignIn } = UserAuth()

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn()
            console.log("Email: ", email);
            router.push('/Pages/Login')
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await signUp(email, password)
            console.log("Email: ", email);
            router.push('/Pages/Login')
        } catch (error) {
            console.log(error)
        }
    }

    const {
        query: {name, setName, toggle, setToggle},
    } = router

    const props = { name, setName, toggle, setToggle }

  return (
        <div className="w-full h-full text-black bg-stone-200 px-6" >

            <Navbar />

            <div className="flex flex-col text-black justify-center items-center h-screen rounded-md shadow-lg bg-white">
                <div className="flex flex-col sm:border border-gray-300 rounded-md items-center">
                    <FaUserCircle size={33} className="mt-10" />
                    <h1 className="text-2xl font-semibold py-4 items-center justify-center text-center" >Sign Up</h1>
                    <p className="w-[500px] px-8 text-gray-500">Create you Crypto CoinSearch account with your personal email to interact with our products at greater scale.</p>
                        
                        <button 
                        onClick={handleGoogleSignIn}
                        className="border border-gray-300 py-4 text-md h-10 text-center justify-center items-center flex font-medium mt-6 mb-4 rounded-md w-[430px]">
                            <Image src={google} alt="google" className="w-6 h-6 mr-2" />
                            Continue with Google
                        </button>

                        <p className="uppercase text-gray-500 text-sm mb-4">or</p>
                        <h2 className="font-medium relative right-[31%] text-left ">Email/Password</h2>

                        <form onSubmit={handleSubmit} >

                            <input 
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            placeholder='Enter your email address'
                            className="border border-gray-300 py-4 text-md h-10 px-[13.5px] flex mt-6 mb-4 rounded-md w-[430px] outline-none text-gray-600 font-light" />

                            <input 
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            placeholder='Enter your password'
                            className="border border-gray-300 py-4 text-md h-10 px-[13.5px] flex mt-1 mb-4 rounded-md w-[430px] outline-none text-gray-600 font-light" />

                            <button
                             onClick={handleSubmit}
                             className="border border-gray-300 py-4 text-md h-10 text-center justify-center items-center flex font-medium mt-6 mb-4 rounded-md w-[430px] bg-lime-400">
                                
                                Complete Registration
                            </button>
                        </form>

                        <p className="w-[425px] pt-3 pb-8">By continuing, you're agreeing to our <span className="font-normal text-blue-500 cursor-pointer">Terms and Privacy Policy.</span> </p>
                    
                </div>
                <p className="font-medium py-5">
                    Already have an account? <span className="font-normal text-blue-500 cursor-pointer">Log in</span>
                </p>
            </div>
            

                <Footer />
            
        </div>

  )
}

export default Signup