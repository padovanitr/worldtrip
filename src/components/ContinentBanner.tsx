import { Box, Flex, Text } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";

interface ContinentInfoProps {
    continent: {
        id: number;
        name: string;
        bannerImage: string;
    }
}

export function ContinentBanner({ continent }: ContinentInfoProps){
    const [isMobile] = useMediaQuery("(max-width: 768px)");

    return (
        <Box>
            <Flex 
                position="absolute"
                direction="column"
                textAlign="center"
                w="100%"
                top={isMobile ? "110px" : "470px"}
                zIndex="2"
                right={isMobile ? "" : "390px"}
            >
                <Text 
                    fontWeight="700" 
                    color="white.100" 
                    fontSize={isMobile ? "24px" : "48px"}
                >{continent.name}</Text>
            </Flex>
            <Flex
                bgImage={`linear-gradient(0deg, rgba(28, 20, 1, 0.35), rgba(28, 20, 1, 0.35)), url('${continent.bannerImage}')`}
                w="100%"
                h={["150px","300px","500px"]}
                px={["0","0","36"]}
                pt={["0","0","72"]}
                bgPosition="center"
                bgRepeat="no-repeat"
                bgSize="cover"
                align="center"
                justifyContent={["center","center", "flex-start"]} 
            />
        </Box>
    )
}