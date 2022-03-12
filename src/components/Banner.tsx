import { Flex, Image } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";

export function Banner(){
    const [isMobile] = useMediaQuery("(max-width: 768px)");

    return (
        <Flex>
            <Image src={isMobile ? "Banner_mobile.svg" : "Banner.svg"}/>
        </Flex>
    )
}