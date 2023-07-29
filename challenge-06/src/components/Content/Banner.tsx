import { Box, Flex, Heading, Text, Image } from "@chakra-ui/react";
import { FlexWithMaxWidth } from "../FlexWithMaxWidth";

interface BannerProps{
    isWidescreen?: boolean
}

export function Banner({ isWidescreen = false }: BannerProps) {
    return (
        <Flex
            w="100%"
            justify="center"
            align="center"
            p={["8", "4"]}
            backgroundImage="/images/starsbackground.svg"
            backgroundSize="cover"
        >
            <FlexWithMaxWidth
                alignItems="center"
                justify={["center", "center", "center", "space-between"]}
            >
                <Flex direction="column" align="center">
                    <Heading as="h2" color="light.500" fontWeight="medium">
                        5 Continentes,
                        <br />
                        infinitas possibilidades.
                    </Heading>
                    <Text
                        color="light.300"
                        fontWeight="regular"
                        w={["100%", "78.5%"]}
                        mt="6"
                    >
                        Chegou a hora de tirar do papel a viagem que você sempre
                        sonhou.
                    </Text>
                </Flex>
                {isWidescreen && (
                    <Box transform="translateY(60px)">
                        <Image src="/images/airplane.svg" alt="airplane" />
                    </Box>
                )}
            </FlexWithMaxWidth>
        </Flex>
    );
}
