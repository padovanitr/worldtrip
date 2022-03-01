import { Image, Flex } from '@chakra-ui/react'

export function Header(){
    return(
        <Flex
            as="header"
            w="100%"
            h="100"
            mx="auto"
            px="6"
            align="center"
            alignItems="center"
            justifyContent="center"
        >
            <Image src="Logo.svg" alt="Logo" />
        </Flex>
    )
}