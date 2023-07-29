import { Flex, Text } from "@chakra-ui/react";

interface BannerProps{
    slide: {
        banner: string,
        name: string
    }
}

export function Banner({ slide }: BannerProps){
    return (
        <Flex
            w="100%"
            h={{
                base: "150px",
                sm:"500px"
            }}
            position="relative"
            align={["center", "flex-end"]}
            justify={["center", "flex-start"]}
            p={["4","8"]}
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
            <Text color="light.500" fontSize={["1.75rem","3rem"]} zIndex="2">{slide.name}</Text>
        </Flex>
    )
}