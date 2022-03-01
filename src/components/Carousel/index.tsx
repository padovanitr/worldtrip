import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export function Carousel(){
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
                    borderBottom: "2px solid #47585B",
                    width: "90px",
                    display: "flex",
                    margin: "2px auto 0 auto",
                }}
            >
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
                    <SwiperSlide>
                        <Box>
                            <Flex 
                                position="absolute"
                                direction="column"
                                textAlign="center"
                                w="100%"
                                top="40%"
                            >
                                <Text 
                                    fontWeight="700" 
                                    color="white.100" 
                                    fontSize="48px"
                                >Europa</Text>
                                <Text 
                                    fontSize="24px" 
                                    color="gray.100"
                                    fontWeight="700"
                                >o continente mais antigo</Text>
                            </Flex>
                            <Image src="continentImage.svg" alt="slide1"/>
                        </Box>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="continentImage.svg" alt="slide2"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="continentImage.svg" alt="slide3"/>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Image src="continentImage.svg" alt="slide4"/>
                    </SwiperSlide>
                </Swiper>
            </Box>

        </Flex>
    )
}