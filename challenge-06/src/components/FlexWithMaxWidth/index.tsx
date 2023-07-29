import { Flex, FlexProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface FlexWithMaxWidthProps extends FlexProps{
    children: ReactNode
}

export function FlexWithMaxWidth({ children, ...rest }: FlexWithMaxWidthProps){
    return (
        <Flex maxWidth="1160px" {...rest}>
            {children}
        </Flex>
    )
}