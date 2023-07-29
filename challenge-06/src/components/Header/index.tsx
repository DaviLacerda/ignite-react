import { Box, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { useRouter } from "next/router";

export function Header() {
    const { asPath } = useRouter()

    return (
        <Box
            as="header"
            position="relative"
            w="100%"
            h="6.25rem"
            display="flex"
            alignItems="center"
            justifyContent="center"
        >
            {
                asPath !== "/" && (
                    <Link href="/">
                        <a>
                            <Text as="span" position="absolute" left="3vw" top='25px' fontSize="2rem">{`<`}</Text>
                        </a>
                    </Link>
                )
            }
            <Image
                src="/images/logo.svg"
                alt="worldtrip logo"
                boxSize="auto"
            />
        </Box>
    );
}
