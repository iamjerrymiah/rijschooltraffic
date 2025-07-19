import { Box, Heading, Stack } from "@chakra-ui/react";
import PageMainContainer from "../../common/PageMain/PageMain";
import CommonHero from "../../common/Hero/CommonHero";
import LessonPackage from "../../common/LessonPackage/LessonPackage";
import CallBackReq from "../../common/CallBackReq/CallBackReq";
import Partners from "../Home/components/Partners";
import Reviews from "../Home/components/Reviews";

function VeelgesteldePage() {
  return (
    <Box w="100%">
      <CommonHero>
        <Heading fontSize="5xl" mt={6} fontWeight="bold" color="white">
          Veelgestelde vragen
        </Heading>
      </CommonHero>
      <Stack px={[4, 10, 10, 28]}>
        <LessonPackage />
      </Stack>
      <CallBackReq />
      <Partners />
      <Reviews />
    </Box>
  );
}

export default function Veelgestelde() {
  return (
    <PageMainContainer title="Veelgestelde Vragen" description="">
      <VeelgesteldePage />
    </PageMainContainer>
  );
}
