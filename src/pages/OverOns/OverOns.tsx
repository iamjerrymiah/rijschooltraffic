import { Box, Heading, Stack } from "@chakra-ui/react";
import PageMainContainer from "../../common/PageMain/PageMain";
import Partners from "../Home/components/Partners";
import Section1 from "./components/Section1";
import CommonHero from "../../common/Hero/CommonHero";
import CallBackReq from "../../common/CallBackReq/CallBackReq";
// import Reviews from "../Home/components/Reviews";

function OverOnPage() {
    return (
        <Box w="100%">
            <CommonHero>
                <Heading fontSize="5xl" mt={6} fontWeight="bold" color="white">
                    Over Ons
                </Heading>
            </CommonHero>
            <Stack px={[4, 10, 10, 28]}>
                <Section1 />
            </Stack>
            <CallBackReq />
            <Partners />
            {/* <Reviews /> */}
        </Box>
    );
}

export default function OverOns() {
    return (
        <PageMainContainer title="Over Ons" description="">
            <OverOnPage />
        </PageMainContainer>
    );
}
