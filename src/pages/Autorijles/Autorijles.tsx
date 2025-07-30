import { Box, Heading, Stack } from "@chakra-ui/react";
import PageMainContainer from "../../common/PageMain/PageMain";
import Partners from "../Home/components/Partners";
import CommonHero from "../../common/Hero/CommonHero";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import ReqTrialLesson from "../../common/ReqTrialLesson/ReqTrialLesson";
import LessonPackage from "../../common/LessonPackage/LessonPackage";
import CallBackReq from "../../common/CallBackReq/CallBackReq";
import { Container } from "../../styling/layout";

function AutorijlesPage() {
    return (
        <Box w="100%">
            <CommonHero>
                <Heading fontSize="5xl" mt={6} fontWeight="bold" color="white">
                    Autorijles Nijmengen
                </Heading>
            </CommonHero>

            <Stack px={[4, 10, 10, 28]}>
                <Section1 />
            </Stack>
            <Stack backgroundColor="whitesmoke" px={[4, 10, 10, 28]}>
                <Section2 />
            </Stack>

            <Stack px={[4, 10, 10, 28]}>
                <Section3 />
            </Stack>

            <ReqTrialLesson />

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

export default function Autorijles() {
    return (
        <PageMainContainer title="Autorijles Nijmengen" description="">
            <AutorijlesPage />
        </PageMainContainer>
    );
}
