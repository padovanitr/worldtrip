import Head from 'next/head';
import { Header } from '../components/Header';
import { Banner } from '../components/Banner';
import { TravelTypes } from '../components/TravelTypes';
import { Carousel } from '../components/Carousel';
import { useState } from 'react';

export default function Home(){
  
  return (
    <>
      <Head>
          <title>WorldTrip - Home</title>
      </Head>
      <Header />
      <Banner />
      <TravelTypes />
      <Carousel />
    </>
  )
}
