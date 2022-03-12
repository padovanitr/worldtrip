import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { useMediaQuery } from "@chakra-ui/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const continentImages = [
    {
        id: 1,
        name: "Europa",
        description: "o continente mais antigo",
        src: "europe.jpg"
    },
    {
        id: 2,
        name: "America do Norte",
        description: "o continente das oportunidades",
        src: "north_america.jpg",
    },
    {
        id: 3,
        name: "America do Sul",
        description: "o continente bonito",
        src: "south_america.jpg"
    },
    {
        id: 4,
        name: "Ásia",
        description: "o continente com curiosidades",
        src: "asia.jpg"
    },
    {
        id: 5,
        name: "África",
        description: "o continente do sol",
        src: "africa.jpg"
    },
    {
        id: 6,
        name: "Oceania",
        description: "o continente das peculiaridades",
        src: "oceania.jpg"
    },
]

export function Carousel(){
    const [isMobile] = useMediaQuery("(max-width: 768px)")

    return (
        <Flex  
            justifyContent="center" 
            maxWidth="1164px" 
            mr="auto" 
            ml="auto"
            mt="60px"
            flexDirection="column"
            mb="60px"
        >   
            <Box 
                _before={{
                    content: `""`,
                    borderBottom: `${isMobile ? "1px solid #47585B" : "2px solid #47585B"}`,
                    width: `${isMobile ? '60px' : '90px'}`,
                    display: "flex",
                    margin: "2px auto 0 auto",
                }}
            >   
            {isMobile ? 
                <Text
                    fontSize='20px' 
                    fontWeight="500" 
                    color="gray.800"
                    textAlign="center"
                    p="23px 0"
                    lineHeight="30px"
                >
                    Vamos nessa? <br /> Então escolha seu continente
                </Text>
                :

                <Text
                    fontSize='36px' 
                    fontWeight="bold" 
                    color="gray.800"
                    textShadow="0px 4px 4px rgba(0, 0, 0, 0.25);"
                    textAlign="center"
                    p="40px 0"
                    lineHeight="54px"
                >
                    Vamos nessa? <br /> Então escolha seu continente
                </Text>
            }

            </Box>

            <Box>
                <Swiper
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                >   
                    {continentImages.map(continentImage =>(
                        <SwiperSlide key={continentImage.id}>
                            <Box>
                                <Flex 
                                    position="absolute"
                                    direction="column"
                                    textAlign="center"
                                    w="100%"
                                    top="40%"
                                    zIndex="2"
                                >
                                    <Text 
                                        fontWeight="700" 
                                        color="white.100" 
                                        fontSize={isMobile ? "24px" : "48px"}
                                    >{continentImage.name}</Text>
                                    <Text 
                                        fontSize={isMobile ? "14px" : "24px"}
                                        color="gray.100"
                                        fontWeight="700"
                                    >{continentImage.description}</Text>
                                </Flex>
                                <Image 
                                    height={isMobile ? "250px" : "422px"} 
                                    width="100%" filter={continentImage.id !== 1 ? "brightness(0.5)" : "none"} 
                                    src={continentImage.src} 
                                    alt={continentImage.name} 
                                />
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>

        </Flex>
    )
}