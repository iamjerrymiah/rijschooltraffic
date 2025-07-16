import { Box, Heading, Stack } from "@chakra-ui/react";
import PageMainContainer from "../../common/PageMain/PageMain";
import Partners from "../Home/components/Partners";
import CommonHero from "../../common/Hero/CommonHero";
import CallBackReq from "../../common/CallBackReq/CallBackReq";
import LessonPackage from "../../common/LessonPackage/LessonPackage";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";

function TheorieExamenPage() {
  return (
    <Box w="100%">
      <CommonHero>
        <Heading fontSize="5xl" mt={6} fontWeight="bold" color="white">
          Theorie-examen
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
        <LessonPackage />
      </Stack>
      <CallBackReq />
      <Partners />
    </Box>
  );
}

export default function TheorieExamen() {
  return (
    <PageMainContainer title="Theorie Examen" description="">
      <TheorieExamenPage />
    </PageMainContainer>
  );
}
