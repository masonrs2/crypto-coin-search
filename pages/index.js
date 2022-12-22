import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import CoinSearch from '../components/CoinSearch'
import Trending from '../components/Trending'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="w-full h-full text-black bg-stone-200 px-6">
      <Navbar />
      <CoinSearch />
      <Trending className="" />
    </div>
  )
}
