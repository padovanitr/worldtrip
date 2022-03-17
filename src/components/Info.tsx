import { Flex, Heading, Text } from "@chakra-ui/react";
import { AiOutlineInfoCircle as InfoIcon } from 'react-icons/ai';

interface InfoProps {
    label: number;
    text: string;
    isLast?: boolean;
}

export function Info({ label, text, isLast }: InfoProps){
    return (
        <Flex
            direction="column"
            align="center"
        >
            <Heading 
                fontSize="48px"
                color="yellow.400"
                fontWeight="600"
            >{label}</Heading>
            <Flex 
                align="center"
                gap="5px"
            >
                <Text 
                    fontSize="24px"
                    color="gray.800"
                    fontWeight="600"
                >{text}
                </Text>
                {isLast && <InfoIcon color="#ccc"/> }
            </Flex>
        </Flex>
    )
}