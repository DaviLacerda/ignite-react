import {
    Box,
    Heading,
    Text,
    Flex,
    Image,
    useBreakpointValue,
} from "@chakra-ui/react";
import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useEffect, useState } from "react";
import { Banner } from "../components/Content/Banner";
import { Swiper } from "../components/Content/Swiper";
import { TravelTypes } from "../components/Content/TravelTypes";
import { FlexWithMaxWidth } from "../components/FlexWithMaxWidth";
import { Header } from "../components/Header";
import { api } from "../services/api";

interface HomeProps{
    slides: SlideData[]
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

const Home = ({ slides }: HomeProps) => {
    const isWidescreen = useBreakpointValue({
        base: false,
        lg: true,
    });
    
    return (
        <>
            <Header />

            <Flex direction="column" align="center" w="100%">
                <Banner isWidescreen={isWidescreen} />
                <TravelTypes shouldDisplayIcons={isWidescreen} />
                <Flex mt="8rem">
                    <Heading
                        as="h3"
                        color="dark.600"
                        fontSize={["1.25rem","2.25rem"]}
                        p="4"
                        fontWeight="medium"
                        textAlign="center"
                        position="relative"
                        _before={{
                            content: `""`,
                            position: 'absolute',
                            top: '-4rem',
                            left: 'calc(50% - 5px)',
                            display: 'block',
                            transform: 'translateX(-50%)',
                            height: "2px",
                            width: "6rem",
                            bg: "dark.600",
                        }}
                    >
                        Vamos nessa? <br />
                        Então escolha seu continente
                    </Heading>
                </Flex>
                <Swiper slides={slides}/>
            </Flex>
        </>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const response = await api.get('/continents')

    return {
        props: {
            slides: response.data,
        },
    };
};

export default Home;
