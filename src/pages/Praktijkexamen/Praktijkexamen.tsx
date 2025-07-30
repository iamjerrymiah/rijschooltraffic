import { Box, Heading, Stack } from "@chakra-ui/react";
import PageMainContainer from "../../common/PageMain/PageMain";
import Partners from "../Home/components/Partners";
import CommonHero from "../../common/Hero/CommonHero";
import CallBackReq from "../../common/CallBackReq/CallBackReq";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import { Container } from "../../styling/layout";
// import Reviews from "../Home/components/Reviews";

function PraktijkexamenPage() {
    return (
        <Box w="100%">
            <CommonHero>
                <Heading fontSize="5xl" mt={6} fontWeight="bold" color="white">
                    Praktijkexamen afleggen
                </Heading>
            </CommonHero>

            <Container>
                <Stack px={[4, 10, 10, 28]}>
                    <Section1 />
                </Stack>
            </Container>

            <Section2 />


            <CallBackReq />
            <Partners />
            {/* <Reviews /> */}
        </Box>
    );
}

export default function Praktijkexamen() {
    return (
        <PageMainContainer title="Praktijkexamen afleggen" description="">
            <PraktijkexamenPage />
        </PageMainContainer>
    );
}
