import { Box, Heading, Stack } from "@chakra-ui/react";
import PageMainContainer from "../../common/PageMain/PageMain";
import Partners from "../Home/components/Partners";
import CommonHero from "../../common/Hero/CommonHero";
import ReqTrialLesson from "../../common/ReqTrialLesson/ReqTrialLesson";
import LessonPackage from "../../common/LessonPackage/LessonPackage";
import CallBackReq from "../../common/CallBackReq/CallBackReq";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Reviews from "../Home/components/Reviews";

function MotorrijlesPage() {
    return (
        <Box w="100%">
            <CommonHero>
                <Heading fontSize="5xl" mt={6} fontWeight="bold" color="white">
                    Motorrijles Apeldoorn
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
            <Stack px={[4, 10, 10, 28]}>
                <LessonPackage />
            </Stack>
             <Stack backgroundColor="whitesmoke" px={[4, 10, 10, 28]}>
                <Section4 />
            </Stack>
            <CallBackReq />
            <Partners />
            <Reviews />
        </Box>
    );
}

export default function Motorrijles() {
    return (
        <PageMainContainer title="Motorrijles" description="">
            <MotorrijlesPage />
        </PageMainContainer>
    );
}
