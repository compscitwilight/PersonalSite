import Head from 'next/head'
import Topbar from '../components/Topbar'
import Header from '../components/Header'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <>
      <Head>
        <title>devrusty</title>
      </Head>
      <div>
        <div className="content">
          <Header />
          <Skills />
        </div>
      </div>
    </>
  )
}
