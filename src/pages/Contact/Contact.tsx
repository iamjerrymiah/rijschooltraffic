import { Box, Heading, Stack } from "@chakra-ui/react";
import PageMainContainer from "../../common/PageMain/PageMain";
import Partners from "../Home/components/Partners";
import CommonHero from "../../common/Hero/CommonHero";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import { Container } from "../../styling/layout";
// import Reviews from "../Home/components/Reviews";

function ContactPage() {
    return (
        <Box w="100%">
            <CommonHero>
                <Heading fontSize="5xl" mt={6} fontWeight="bold" color="white">
                    Contact
                </Heading>
            </CommonHero>

            <Container>
                <Stack px={[4, 10, 10, 28]}>
                    <Section1 />
                    <Section2 />
                </Stack>
            </Container>

            {/* <Reviews /> */}
            <Partners />
        </Box>
    );
}

export default function Contact() {
    return (
        <PageMainContainer title="Contact" description="">
            <ContactPage />
        </PageMainContainer>
    );
}
