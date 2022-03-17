import { Box, Flex, Image, Text, Grid, Heading } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { useMediaQuery } from "@chakra-ui/react";

import { Header } from "../../components/Header";
import { api } from "../../services/api";
import Head from "next/head";
import { Info } from "../../components/Info";
  
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
                    top={isMobile ? "50%" : "470px"}
                    zIndex="2"
                    right={isMobile ? "" : "450px"}
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

            <Grid templateColumns={["1fr","1fr","1fr 1fr", "1.2fr 1fr"]} gap={[5, 10, 16, 20]} my={["8", "20"]} padding="0 100px">
                <Text
                    fontSize={["lg", "xl", "xl", "2xl"]}
                    color="gray.700"
                    textAlign="justify"
                >
                {continent.description}
                </Text>
                <Flex
                    align="center"
                    justify="left"
                    gap="42px"
                >   
                    <Info 
                        label={continent.numberOfCountries}
                        text="países"
                    />

                    <Info 
                        label={continent.numberOfLanguages}
                        text="línguas"
                    />

                    <Info 
                        label={continent.amountMostPopularCities}
                        text="cidades +100"
                        isLast={true}
                    />
                </Flex>
            </Grid>
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