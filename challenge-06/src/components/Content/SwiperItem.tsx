import { Flex, Heading, Text } from "@chakra-ui/react";
import Link from "next/link";

interface SwiperItemProps {
    slide: SlideData;
}

interface SlideData {
    id: number;
    name: string;
    banner: string;
    summary: string;
    slug: string;
    slogan: string;
    infos: object;
    cities: object;
}

export function SwiperItem({ slide }: SwiperItemProps) {
    return (
        <Link href={`/continent/${slide.slug}`}>
            <a>
                <Flex
                    w="100%"
                    h="100%"
                    align="center"
                    justify="center"
                    direction="column"
                    textAlign="center"
                    _before={{
                        content: `""`,
                        w: "100%",
                        h: "100%",
                        position: "absolute",
                        top: "0",
                        left: "0",
                        backgroundImage: `url(${slide.banner})`,
                        bgRepeat: "no-repeat",
                        bgSize: "cover",
                        bgPosition: "center",
                        filter: "brightness(0.6)",
                    }}
                >
                    <Heading
                        fontSize={{
                            base: "1.5rem",
                            lg: "3rem",
                        }}
                        color="light.500"
                        fontWeight="bold"
                        zIndex="2"
                    >
                        {slide.name}
                    </Heading>
                    <Text
                        as="span"
                        zIndex="2"
                        w="60%"
                        color="light.300"
                        fontWeight="bold"
                        fontSize={{
                            base: "0.875rem",
                            lg: "1.5rem",
                        }}
                    >
                        {slide.slogan}
                    </Text>
                </Flex>
            </a>
        </Link>
    );
}
