import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useMediaQuery } from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { api } from "../../services/api";
import Head from "next/head";
  
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
        <Box>
            <Head>
                <title>WorldTrip - {continent.name}</title>
            </Head>
            <Header hasBackLink />

            <Box>
                <Flex 
                    position="absolute"
                    direction="column"
                    textAlign="center"
                    w="100%"
                    top={isMobile ? "50%" : "78%"}
                    zIndex="2"
                    right={isMobile ? "" : "35%"}
                >
                    <Text 
                        fontWeight="700" 
                        color="white.100" 
                        fontSize={isMobile ? "24px" : "48px"}
                    >{continent.name}</Text>
                </Flex>
                <Flex
                    filter={continent.id !== 1 ? "brightness(0.7)" : "none"} 
                    w="100%"
                    h={["150px","300px","500px"]}
                    px={["0","0","36"]}
                    pt={["0","0","72"]}
                    bgImage={`url('${continent.bannerImage}')`}
                    bgPosition="center"
                    bgRepeat="no-repeat"
                    bgSize="cover"
                    align="center"
                    justifyContent={["center","center", "flex-start"]} 
                />
            </Box>
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