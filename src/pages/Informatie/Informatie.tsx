import { Box, Heading, Stack } from "@chakra-ui/react";
import PageMainContainer from "../../common/PageMain/PageMain";
import Partners from "../Home/components/Partners";
import CommonHero from "../../common/Hero/CommonHero";
import CallBackReq from "../../common/CallBackReq/CallBackReq";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Section5 from "./components/Section5";
import Section6 from "./components/Section6";
import Section7 from "./components/Section7";
import LessonPackage from "../../common/LessonPackage/LessonPackage";
import { Container } from "../../styling/layout";
// import Reviews from "../Home/components/Reviews";

function InformatiePage() {
    return (
        <Box w="100%">
            <CommonHero>
                <Heading fontSize="5xl" mt={6} fontWeight="bold" color="white">
                    Informatie voor ouders
                </Heading>
            </CommonHero>

            <Container>
                <Stack px={[4, 10, 10, 28]}>
                    <Section1 />
                </Stack>
            </Container>

            <Section2 />

            <Container>
                <Stack my={20} px={[4, 10, 10, 28]}>
                    <Section3 />
                    <Section4 />
                    <Section5 />
                    <Section6 />
                </Stack>
            </Container>

            <Section7 />

            <Container>
                <Stack px={[4, 10, 10, 28]}>
                    <LessonPackage />
                </Stack>
            </Container>

            <CallBackReq />
            <Partners />
            {/* <Reviews /> */}
        </Box>
    );
}

export default function Informatie() {
    return (
        <PageMainContainer title="Informatie voor ouders" description="">
            <InformatiePage />
        </PageMainContainer>
    );
}
