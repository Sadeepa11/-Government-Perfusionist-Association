// pages/index.js
import Head from 'next/head'
import Hero from './components/Hero'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import Footer from './components/Footer'
import Gallery from './Gallery'
import PerfusionistRole from './components/Glance'

export default function Home() {
  return (
    <>
      <Head>
        <title>Perfusion Lanka | Home</title>
        <meta name="description" content="Sri Lankan Perfusion Services Website" />
      </Head>

   
      <Hero />
      <AboutSection />
      <ServicesSection/>
     <PerfusionistRole/>
      <Gallery/>
      <Footer/>

    </>
  )
}
