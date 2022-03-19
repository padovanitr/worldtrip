import { Flex, Grid, Text } from "@chakra-ui/react";
import { Info } from "./Info";
import { useMediaQuery } from "@chakra-ui/react";

interface ContinentInfoProps {
    continent: {
        numberOfCountries: number;
        numberOfLanguages: number;
        amountMostPopularCities: number;
        description: string; 
    }
}

export function ContinentInfo({ continent }: ContinentInfoProps){
    const [isMobile] = useMediaQuery("(max-width: 768px)");

    return (
        <Grid templateColumns={["1fr","1fr","1fr 1fr", "1.2fr 1fr"]} gap={[5, 10, 16, 20]} my={["8", "20"]}>
            <Text
                fontSize={["sm", "md", "lg", "xl"]}
                color="gray.700"
                textAlign="justify"
            >
            {continent.description}
            </Text>
            <Flex
                align="center"
                justify={isMobile ? "space-between" : "center"}
                gap={isMobile ? "10px" : "42px"}
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
    )
}