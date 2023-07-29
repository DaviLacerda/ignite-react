import { Header } from "../../components/Header";
import { Banner } from "../../components/Continent/Banner";
import { Flex } from "@chakra-ui/react";
import { GetStaticProps, GetStaticPaths } from "next";
import { api } from "../../services/api";
import { Infos } from "../../components/Continent/Infos";
import { Cities } from "../../components/Continent/Cities";

interface ContinentProps {
    continent: SlideData;
}

interface SlideData {
    id: number;
    name: string;
    banner: string;
    summary: string;
    slug: string;
    slogan: string;
    infos: {
        most_visited: number;
        languages: number;
        country_quantity: number;
    };
    cities: City[];
}

interface City {
    city: string;
    country: string;
    image: string;
    country_image: string;
}

export default function Continent({ continent }: ContinentProps) {
    return (
        <>
            <Header />
            <Banner slide={continent} />
            <Flex justify="center" mt={["0rem", "2.5rem"]}>
                <Infos slide={continent} />
            </Flex>
            <Flex justify="center" mt={["0rem", "2.5rem"]}>
                <Cities slide={continent} />
            </Flex>
        </>
    );
}

export const getStaticPaths: GetStaticPaths = () => {
    return {
        paths: [],
        fallback: "blocking",
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { slug }: any = params

    const data: SlideData[] = await api
        .get("/continents")
        .then((response) => response.data);

    const continent = data.find((continent) => continent.slug === slug);

    return {
        props: {
            continent,
        },
    };
};
