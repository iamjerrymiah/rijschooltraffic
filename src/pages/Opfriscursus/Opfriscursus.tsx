import { Box, Heading, Stack } from "@chakra-ui/react";
import PageMainContainer from "../../common/PageMain/PageMain";
import Partners from "../Home/components/Partners";
import CommonHero from "../../common/Hero/CommonHero";
import ReqTrialLesson from "../../common/ReqTrialLesson/ReqTrialLesson";
import LessonPackage from "../../common/LessonPackage/LessonPackage";
import CallBackReq from "../../common/CallBackReq/CallBackReq";
import Section1 from "./components/Section1";
import Reviews from "../Home/components/Reviews";

function OpfriscursusPage() {
    return (
        <Box w="100%">
            <CommonHero>
                <Heading fontSize="5xl" mt={6} fontWeight="bold" color="white">
                    Opfriscursus
                </Heading>
            </CommonHero>
            <Stack px={[4, 10, 10, 28]}>
                <Section1 />
            </Stack>

            <ReqTrialLesson />
            <Stack px={[4, 10, 10, 28]}>
                <LessonPackage />
            </Stack>
            <Partners />
            <CallBackReq />
            {/* <Reviews /> */}
        </Box>
    );
}

export default function Opfriscursus() {
    return (
        <PageMainContainer title="Opfriscursus" description="">
            <OpfriscursusPage />
        </PageMainContainer>
    );
}
