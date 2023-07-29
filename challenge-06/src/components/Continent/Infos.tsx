import { Flex, Icon, Text, Tooltip } from "@chakra-ui/react";
import { FlexWithMaxWidth } from "../FlexWithMaxWidth";
import { RiInformationLine } from "react-icons/ri";

interface InfosProps {
    slide: {
        summary: string;
        infos: {
            most_visited: number;
            languages: number;
            country_quantity: number;
        };
    };
}

export function Infos({ slide }: InfosProps) {
    return (
        <FlexWithMaxWidth align="center" p={["4", "6"]}>
            <Flex
                flexDirection={{
                    base: "column",
                    lg: "row",
                }}
                justify="space-between"
                gap="2.5rem"
            >
                <Text
                    w="100%"
                    maxW="900px"
                    color="dark.600"
                    fontWeight="regular"
                    fontSize={{
                        base: "0.875rem",
                        lg: "1.5rem",
                    }}
                >
                    {slide.summary}
                </Text>
                <Flex gap="0.5rem" flexWrap="wrap" w="100%" align="center">
                    <Flex
                        direction="column"
                        align={["flex-start", "center"]}
                        flex="1"
                    >
                        <Text
                            color="highlight"
                            fontSize={{
                                base: "1.5rem",
                                lg: "3rem",
                            }}
                        >
                            {slide.infos.country_quantity}
                        </Text>
                        <Text
                            fontWeight="semibold"
                            fontSize={["0.875rem", "1.5rem"]}
                            color="dark.600"
                        >
                            países
                        </Text>
                    </Flex>
                    <Flex
                        direction="column"
                        align={["flex-start", "center"]}
                        flex="1"
                    >
                        <Text
                            color="highlight"
                            fontSize={{
                                base: "1.5rem",
                                lg: "3rem",
                            }}
                        >
                            {slide.infos.languages}
                        </Text>
                        <Text
                            fontWeight="semibold"
                            fontSize={["0.875rem", "1.5rem"]}
                            color="dark.600"
                        >
                            línguas
                        </Text>
                    </Flex>
                    <Flex
                        direction="column"
                        align={["flex-start", "center"]}
                        flex="1"
                    >
                        <Text
                            color="highlight"
                            fontSize={{
                                base: "1.5rem",
                                lg: "3rem",
                            }}
                        >
                            {slide.infos.most_visited}
                        </Text>
                        <Text
                            fontWeight="semibold"
                            fontSize={["0.875rem", "1.5rem"]}
                            color="dark.600"
                            w="max-content"
                        >
                            cidades +100
                            <Tooltip
                                label="Quantidade de cidades entre as 100 mais visitadas no mundo."
                                aria-label="Tooltip"
                            >
                                <Text as="span" fontSize="1rem">
                                    <Icon as={RiInformationLine} />
                                </Text>
                            </Tooltip>
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
        </FlexWithMaxWidth>
    );
}
