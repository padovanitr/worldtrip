import styles from '../styles/Home.module.scss'
import { Header } from '../components/Header'
import { Banner } from '../components/Banner'
import { TravelTypes } from '../components/TravelTypes'
import { Carousel } from '../components/Carousel'

export default function Home (){
  
  return (
    <>
      <Header />
      <Banner />
      
      <Carousel />
    </>
  )
}
