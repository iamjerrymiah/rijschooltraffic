import { Box, Heading, Stack } from "@chakra-ui/react";
import PageMainContainer from "../../common/PageMain/PageMain";
import Partners from "../Home/components/Partners";
import CommonHero from "../../common/Hero/CommonHero";
import CallBackReq from "../../common/CallBackReq/CallBackReq";
import LessonPackage from "../../common/LessonPackage/LessonPackage";
import Section1 from "./components/Section1";
import { Container } from "../../styling/layout";
// import Reviews from "../Home/components/Reviews";

function EigenPage() {
    return (
        <Box w="100%">
            <CommonHero>
                <Heading fontSize="5xl" mt={6} fontWeight="bold" color="white">
                    Eigen verklaring
                </Heading>
            </CommonHero>

            <Container>
                <Stack px={[4, 10, 10, 28]}>
                    <Section1 />
                    <LessonPackage />
                </Stack>
            </Container>
            
            <CallBackReq />
            <Partners />
            {/* <Reviews /> */}
        </Box>
    );
}

export default function Eigen() {
    return (
        <PageMainContainer title="Eigen verklaring" description="">
            <EigenPage />
        </PageMainContainer>
    );
}
