import { Grid, GridItem } from "@chakra-ui/react";
import { TravelTypesItem } from "./TravelTypesItem";

export function TravelTypes(){
    return (
        <Grid
            templateColumns={["1fr 1fr","1fr 1fr","1fr 1fr","repeat(5, 1fr)"]}
            w="100%"
            justifyContent="space-between"
            alignItems="center"
            mt={["10","32"]}
            mx="auto"
            maxW="1160px"
            flexWrap="wrap"
            gap={[1,5]}
        >
            <GridItem>
                <TravelTypesItem icon="Nightlife.svg" text="vida noturna" />
            </GridItem>
            <GridItem>
                <TravelTypesItem icon="Beach.svg" text="praia" />
            </GridItem>
            <GridItem>
                <TravelTypesItem icon="Building.svg" text="moderno" />
            </GridItem>
            <GridItem>
                <TravelTypesItem icon="Museum.svg" text="clássico" />
            </GridItem>
            <GridItem colSpan={[2, 2, 2, 1]}>
                <TravelTypesItem icon="Earth.svg" text="e mais..." />
            </GridItem>
        </Grid>
    )
}