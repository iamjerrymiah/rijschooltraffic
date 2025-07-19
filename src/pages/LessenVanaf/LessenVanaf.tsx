import { Box, Heading, Stack } from "@chakra-ui/react";
import PageMainContainer from "../../common/PageMain/PageMain";
import Partners from "../Home/components/Partners";
import CommonHero from "../../common/Hero/CommonHero";
import CallBackReq from "../../common/CallBackReq/CallBackReq";
import LessonPackage from "../../common/LessonPackage/LessonPackage";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Reviews from "../Home/components/Reviews";

function LessenVanafPage() {
  return (
    <Box w="100%">
      <CommonHero>
        <Heading fontSize="5xl" mt={6} fontWeight="bold" color="white">
          2toDrive – Driving lessons from 16.5
        </Heading>
      </CommonHero>
      <Stack px={[4, 10, 10, 28]}>
        <Section1 />
      </Stack>
      <Stack px={[4, 10, 10, 28]} my={10} backgroundColor="whitesmoke">
        <Section2 />
      </Stack>
      <Stack px={[4, 10, 10, 28]}>
        <LessonPackage />
      </Stack>
      <CallBackReq />
      <Partners />
      <Reviews />
    </Box>
  );
}

export default function LessenVanaf() {
  return (
    <PageMainContainer title="Lessen Vanaf" description="">
      <LessenVanafPage />
    </PageMainContainer>
  );
}
