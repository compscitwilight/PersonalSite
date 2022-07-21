import '../styles/globals.scss'
import Topbar from '../components/Topbar'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Topbar></Topbar>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
