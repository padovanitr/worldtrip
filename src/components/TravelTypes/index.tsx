import { Box, Flex, Grid, GridItem, HStack, Image } from "@chakra-ui/react";

export function TravelTypes(){
    return (
        <Flex 
            justifyContent="space-between" 
            maxWidth="1160px" 
            gap="10px" 
            mr="auto" 
            ml="auto"
            mt="50px"
        >
            <Image boxSize='120px' src="Nightlife.svg"/>
            <Image boxSize='120px' src="Beach.svg"/>
            <Image boxSize='120px' src="Modern.svg"/>
            <Image boxSize='120px' src="Classic.svg"/>
            <Image boxSize='120px' src="More.svg"/>  
        </Flex>
    )
}