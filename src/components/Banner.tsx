import { Flex, Image } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";

export function Banner(){
    const [isMobile] = useMediaQuery("(max-width: 768px)");

    return (
        <Flex>
            <Image src={isMobile ? "/images/Banner_mobile.svg" : "/images/Banner.svg"}/>
        </Flex>
    )
}