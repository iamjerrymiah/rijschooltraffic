import { Box, Heading, Stack } from "@chakra-ui/react";
import PageMainContainer from "../../common/PageMain/PageMain";
import Partners from "../Home/components/Partners";
import CommonHero from "../../common/Hero/CommonHero";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import CallBackReq from "../../common/CallBackReq/CallBackReq";
import LessonPackage from "../../common/LessonPackage/LessonPackage";
import Reviews from "../Home/components/Reviews";
import { Container } from "../../styling/layout";

function OverOnPage() {
    return (
        <Box w="100%">
            <CommonHero>
                <Heading fontSize="5xl" mt={6} fontWeight="bold" color="white">
                    Tarieven
                </Heading>
            </CommonHero>
            
            <Container>
                <Stack px={[4, 10, 10, 28]}>
                    <LessonPackage last />
                </Stack>
            </Container>

            <Section2 />
            <Section3 />
            <CallBackReq />
            <Partners />
            <Reviews />
        </Box>
    );
}

export default function Tarieven() {
    return (
        <PageMainContainer title="Tarieven" description="">
            <OverOnPage />
        </PageMainContainer>
    );
}
