import '../styles/globals.css'
import { AuthContextProvider, UserAuth } from '../context/AuthContext'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


export default function App({ Component, pageProps, children }) {

  return (
    <>
    <AuthContextProvider>
      <Component {...pageProps} {...children} />
    </AuthContextProvider>
    </>
  )
}
