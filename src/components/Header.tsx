import { Image, Flex, Link as ChakraLink, Icon, useMediaQuery } from '@chakra-ui/react';
import Link from 'next/link';
import { FiChevronLeft } from "react-icons/fi";

interface HeaderProps {
    hasBackLink?: boolean;
}

export function Header({ hasBackLink = false }: HeaderProps){
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
            {hasBackLink && (
                <Link href='/'>
                    <ChakraLink position='absolute' left={['16px', '40px']}>
                        <Icon as={FiChevronLeft} color="gray.500" fontSize={["1rem", "2rem"]}/>
                    </ChakraLink>
                </Link>
            )}
            <Image 
                w={isMobile ? '81px' : '180px'} 
                src="/images/Logo.svg" 
                alt="Logo" 
            />
        </Flex>
    )
}