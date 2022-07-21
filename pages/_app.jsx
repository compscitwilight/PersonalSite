import '../styles/globals.scss'
import Topbar from '../components/Topbar'
import ExternalMetaData from '../components/meta/ExternalMetaData'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ExternalMetaData></ExternalMetaData>
      <Topbar></Topbar>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
