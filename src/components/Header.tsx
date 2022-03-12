import { Image, Flex } from '@chakra-ui/react';
import { useMediaQuery } from "@chakra-ui/react";

export function Header(){
    const [isMobile] = useMediaQuery("(max-width: 768px)");

    return(
        <Flex
            as="header"
            w="100%"
            h={isMobile ? '50px' : "100px"}
            mx="auto"
            px="6"
            align="center"
            alignItems="center"
            justifyContent="center"
        >
            <Image 
                boxSize={isMobile ? '81px' : '180px'} 
                src="Logo.svg" 
                alt="Logo" 
            />
        </Flex>
    )
}