import { Box, Stack } from "@chakra-ui/react";
import PageMainContainer from "../../common/PageMain/PageMain";
import Hero from "./components/Hero";
import Section1 from "./components/Section1";
import Partners from "./components/Partners";
import FeaturesGrid from "./components/FeaturesGrid";
import { Container } from "../../styling/layout";
import CourseGrid from "./components/CourseGrid";

function HomeMain() {
    return(
        <Box w='100%'>
            <Hero />
            <Container>
                <Stack px={[4,10,10,28]}>
                    <FeaturesGrid />
                    <Section1 />
                </Stack>
            </Container>
            <CourseGrid />
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
