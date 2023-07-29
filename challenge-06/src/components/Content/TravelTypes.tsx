import { Flex, Image, ListItem, Text } from "@chakra-ui/react";
import { FlexWithMaxWidth } from "../FlexWithMaxWidth";

interface TravelTypesProps {
    shouldDisplayIcons?: boolean;
}

const travelTypesItens = [
    "vida noturna",
    "praia",
    "moderno",
    "clássico",
    "e mais...",
];
const travelTypesIcons = ["cocktail", "surf", "building", "museum", "earth"];

export function TravelTypes({ shouldDisplayIcons = false }: TravelTypesProps) {
    return (
        <FlexWithMaxWidth
            flexWrap="wrap"
            gap={{base: '4rem', lg: '8rem'}}
            direction="row"
            justify="space-between"
            p={["4", "6"]}
            mt="5rem"
        >
            {travelTypesItens.map((item, index) => (
                <Flex
                    direction={["row", "row", "row", "column"]}
                    textAlign="center"
                    align="center"
                    flex="1"
                    key={item}
                >
                    {shouldDisplayIcons ? (
                        <Image src={`/icons/${travelTypesIcons[index]}.svg`} mb="2" alt={travelTypesIcons[index]}/>
                    ) : (
                        <Text
                            as="span"
                            w="8px"
                            h="8px"
                            mr="2"
                            bg="highlight"
                            borderRadius="full"
                        />
                    )}
                    <Text w="max-content" color="dark.600" fontWeight="semibold">
                        {item}
                    </Text>
                </Flex>
            ))}
        </FlexWithMaxWidth>
    );
}
