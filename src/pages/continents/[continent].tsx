import { Box, Flex, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useMediaQuery } from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { api } from "../../services/api";
import Head from "next/head";
import { ContinentInfo } from "../../components/ContinentInfo";
import { ContinentBanner } from "../../components/ContinentBanner";
import { ContinentCities } from "../../components/ContinentCities";
  
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
    const [isMobile] = useMediaQuery("(max-width: 768px)");
    console.log('continent ----->', continent)
    return (
        <Box
            backgroundColor="gray.150"
        >
            <Head>
                <title>WorldTrip - {continent.name}</title>
            </Head>
            <Header hasBackLink />

            <ContinentBanner continent={continent} />

            <Flex
                p={isMobile ? "0 20px" : "0 70px"}
                direction="column"
            >
                <ContinentInfo continent={continent} />
                
                <ContinentCities continent={continent} />
            </Flex>
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