import { Flex, Image, Text } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";

interface TravelTypesItemProps {
    text: string;
    icon: string;
}

export function TravelTypesItem({ text, icon }: TravelTypesItemProps) {
    const [isMobile] = useMediaQuery("(max-width: 768px)");
    console.log('is moobile', isMobile);

    return (
        <Flex direction={["row","column"]} align="center" justify="center">
          {isMobile ? <Text color="yellow.400" fontSize="4xl" mr="2">•</Text> : <Image src={`/icons/${icon}`} w="85px" h="85px" mb="6" />}
          <Text fontWeight="600" color="gray.700" fontSize={["md", "xl","2xl"]}>{text}</Text>
        </Flex>
    )
}
