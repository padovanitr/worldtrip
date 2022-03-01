import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

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
                    spaceBetween={0}
                    tag="section"
                    wrapperTag="ul"
                    navigation
                    pagination={{ clickable: true }}
                    slidesPerView={1}
                    onInit={(swiper) => console.log("initialized", swiper)}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide tag="li">
                        <Image src="continentImage.svg" alt="slide1"/>
                    </SwiperSlide>
                    <SwiperSlide tag="li">
                        <Image src="continentImage.svg" alt="slide2"/>
                    </SwiperSlide>
                    <SwiperSlide tag="li">
                        <Image src="continentImage.svg" alt="slide3"/>
                    </SwiperSlide>
                    <SwiperSlide >
                        <Image src="continentImage.svg" alt="slide4"/>
                    </SwiperSlide>
                </Swiper>
            </Box>

        </Flex>
    )
}