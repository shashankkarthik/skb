import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>SKB</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to Soy Koi & Bokchoy!" />
        <p className="description">
          Our site is still under construction but check back soon!
        </p>
      </main>

      <Footer />
    </div>
  )
}
