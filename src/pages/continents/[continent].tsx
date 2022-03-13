import { Box } from "@chakra-ui/react";
import { GetStaticPaths, GetStaticProps } from "next";
import { Header } from "../../components/Header";
import { api } from "../../services/api";

type ContinentType = {
    id: number;
    name: string;
    description: string;
    bannerImage: string;
    numberOfCountries: number;
    numberOfLanguages: number;
    amountMostPopularCities: number;
    mostPopularCities: [{
      cityName: string;
      countryName: string;
      cityImage: string;
      countryCode: string;
    }]
  }
  
interface ContinentProps {
    continent: ContinentType;
}

export default function Continent({ continent }: ContinentProps) {
    console.log('continent ----->', continent)
    return (
        <Box>
            <Header hasBackLink />
        </Box>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
      paths: [],
      fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const { continent }:any = params
    
    const { data } = await api.get(`/continents?slug=${continent}`);

    return {
        props: {
            continent: data,
        }
    }
}