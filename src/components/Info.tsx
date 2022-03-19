import { Flex, Heading, Text } from "@chakra-ui/react";
import { AiOutlineInfoCircle as InfoIcon } from 'react-icons/ai';
import { useMediaQuery } from "@chakra-ui/react";

interface InfoProps {
    label: number;
    text: string;
    isLast?: boolean;
}

export function Info({ label, text, isLast }: InfoProps){
    const [isMobile] = useMediaQuery("(max-width: 768px)");

    return (
        <Flex
            direction="column"
            align={isMobile ? "left" : "center"}
        >
            <Heading 
                fontSize={isMobile ? "24px" : "48px"}
                color="yellow.400"
                fontWeight="600"
            >{label}</Heading>
            <Flex 
                align="center"
                gap="5px"
            >
                <Text 
                    fontSize={isMobile ? "18px" : "24px"}
                    color="gray.800"
                    fontWeight={isMobile ? "400" : "600"}
                >{text}
                </Text>
                {isLast && <InfoIcon size={isMobile ? "10px" : "15px" } color="#ccc"/> }
            </Flex>
        </Flex>
    )
}