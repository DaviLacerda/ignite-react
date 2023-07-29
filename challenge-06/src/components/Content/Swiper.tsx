import { Swiper as SwiperContainer, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { SwiperItem } from "./SwiperItem";
import Link from "next/link";
import { FlexWithMaxWidth } from "../FlexWithMaxWidth";

interface SwiperProps {
    slides: SlideData[];
}

interface SlideData {
    id: number;
    name: string;
    banner: string;
    slogan: string;
    slug: string;
    summary: string;
    infos: object;
    cities: object;
}

export function Swiper({ slides }: SwiperProps) {
    return (
        <FlexWithMaxWidth
            w="100%"
            h={["250px", "450px"]}
            maxW="1240px"
            mx="auto"
            mt="2.5rem"
            mb="2.5rem"
        >
            <SwiperContainer
                modules={[Navigation, Pagination]}
                slidesPerView={1}
                draggable
                autoplay={{ delay: 6000 }}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                }}
                pagination={{
                    clickable: true,
                }}
                style={{ width: "100%", flex: "1" }}
            >
                <Box
                    className="swiper-button-next"
                    color="highlight"
                    _after={{
                        fontSize: {
                            base: "1rem",
                            md: "2rem"
                        }
                    }}
                ></Box>
                <Box
                    className="swiper-button-prev"
                    color="highlight"
                    _after={{
                        fontSize: {
                            base: "1rem",
                            md: "2rem"
                        }
                    }}
                ></Box>

                {slides.map((slide) => (
                    <SwiperSlide>
                        <SwiperItem slide={slide} key={slide.id} />
                    </SwiperSlide>
                ))}
            </SwiperContainer>
        </FlexWithMaxWidth>
    );
}
