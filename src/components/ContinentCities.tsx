import { Box, Flex, Grid, GridItem, Heading, Image, Text } from "@chakra-ui/react";

interface ContinentCitiesProps {
    continent: {
        mostPopularCities: [{
            cityName: string;
            countryName: string;
            cityImage: string;
            countryCode: string;
        }]
    }
}

export function ContinentCities({ continent }: ContinentCitiesProps){
    return (
        <Box>
            <Heading
                fontFamily="Poppins"
                fontWeight="500"
                color="#47585B"
                fontSize="36px"
                lineHeight="56px"
            >
                Cidades +100
            </Heading>

            <Grid
                templateColumns={["1fr 1fr","1fr 1fr","1fr 1fr","repeat(4, 1fr)"]}
                w="100%"
                justifyContent="center"
                alignItems="center"
                mt="25px"
                mx="auto"
                flexWrap="wrap"
                gap={[1,5]}
            >   
                {continent.mostPopularCities.map(city => (
                    <GridItem
                        w="256px"
                        mb="48px"
                    >
                        <Image
                            h="173px"
                            w="100%" 
                            src={city.cityImage}
                            borderRadius="6px 6px 0 0"
                        />
                        <Flex
                            borderRadius="0 0 6px 6px"
                            borderStyle="solid"
                            borderColor="rgba(255, 186, 8, 0.5)"
                            borderWidth="0 1px 1px 1px"
                            w="100%"
                            h="106px"
                            backgroundColor="white.0"
                        >
                            <Flex 
                                direction="column"
                                align="left"
                                justify="space-evenly"
                                p="15px 20px"
                            >
                                <Text
                                fontFamily="Barlow" 
                                fontWeight="600"
                                fontSize="20px"
                                lineHeight="25px"
                                color="#47585B"
                                >{city.cityName}</Text>
                                <Text
                                    fontFamily="Barlow" 
                                    fontWeight="500"
                                    fontSize="16px"
                                    lineHeight="26px"
                                    color="#999999"
                                >{city.countryName}</Text>
                            </Flex>
                        </Flex>
                    </GridItem>
                ))}
            </Grid>
        </Box>
    )
}