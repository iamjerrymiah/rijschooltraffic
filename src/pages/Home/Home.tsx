import { Box, Stack } from "@chakra-ui/react";
import PageMainContainer from "../../common/PageMain/PageMain";
import Hero from "./components/Hero";
import Section1 from "./components/Section1";
import Partners from "./components/Partners";

function HomeMain() {
    return(
        <Box w='100%'>
            <Hero />
            <Stack px={[4,10,10,28]}>
                <Section1 />
            </Stack>
            <Partners />
        </Box>
    )
}

export default function Home() {
    return (
        <PageMainContainer title="Home" description="">
            <HomeMain />
        </PageMainContainer>
    )
}
