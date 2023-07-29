import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import { FlexWithMaxWidth } from "../FlexWithMaxWidth";

interface CitiesProps {
    slide: {
        cities: City[];
    };
}

interface City {
    city: string;
    country: string;
    image: string;
    country_image: string;
}

export function Cities({ slide }: CitiesProps) {
    return (
        <FlexWithMaxWidth
            w="100%"
            align="center"
            direction="column"
            gap="2.5rem"
            p={["4", "6"]}
            mb="2.5rem"
        >
            <Heading
                w="100%"
                fontSize={["1.5rem", "2.25rem"]}
                fontWeight="medium"
                textAlign={["left", "center"]}
            >
                Cidades 100+
            </Heading>
            <Flex direction={["column", "row"]} align="center" flexWrap="wrap" gap="45px" w="100%">
                {slide.cities.map((city) => (
                    <Flex flex="1" w="256px" minW="256px" direction="column">
                        <Box
                            w="100%"
                            h="173px"
                            backgroundImage={`url(${city.image})`}
                            backgroundPosition="center"
                            bgSize="cover"
                            borderTopRadius="4px"
                        />
                        <Flex direction="row" borderBottomRadius="0.5rem" borderWidth="1px" borderTop="none" borderColor="highlight" p="6" justify="space-between" align="center" bgColor="light.900">
                            <Flex direction="column">
                                <Heading fontSize="1.25rem" fontWeight="semibold" mb="0.75rem">{city.city}</Heading>
                                <Text fontWeight="medium" fontSize="1rem" color="dark.300">{city.country}</Text>
                            </Flex>
                            <Box 
                                backgroundImage={`url(${city.country_image})`}
                                w="30px"
                                h="30px"
                                backgroundRepeat="no-repeat"
                                backgroundPosition="center"
                                backgroundSize="cover"
                                borderRadius="full"
                            />
                        </Flex>
                    </Flex>
                ))}
            </Flex>
        </FlexWithMaxWidth>
    );
}
