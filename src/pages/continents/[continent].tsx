import { Box, Flex, Text } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";

import { Header } from "../../components/Header";
import { api } from "../../services/api";
import Head from "next/head";
import { ContinentInfo } from "../../components/ContinentInfo";
import { ContinentBanner } from "../../components/ContinentBanner";
  
interface ContinentProps {
    continent: {
        id: number;
        name: string;
        description: string;
        bannerImage: string;
        numberOfCountries: number;
        numberOfLanguages: number;
        amountMostPopularCities: number;
        mostPopularCities: [{
          cityName: string;
          countryName: string;
          cityImage: string;
          countryCode: string;
        }]
    };
}

export default function Continent({ continent }: ContinentProps) {
    console.log('continent ----->', continent)
    return (
        <Box>
            <Head>
                <title>WorldTrip - {continent.name}</title>
            </Head>
            <Header hasBackLink />

            <ContinentBanner 
                continent={continent}
            />

            <ContinentInfo 
                continent={continent}
            />
        </Box>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
      paths: [],
      fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { continent }:any = params
    
    const { data } = await api.get(`/continents?slug=${continent}`);

    return {
        props: {
            continent: data[0],
        }
    }
}