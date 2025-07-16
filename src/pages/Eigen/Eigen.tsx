import { Box, Heading, Stack } from "@chakra-ui/react";
import PageMainContainer from "../../common/PageMain/PageMain";
import Partners from "../Home/components/Partners";
import CommonHero from "../../common/Hero/CommonHero";
import CallBackReq from "../../common/CallBackReq/CallBackReq";
import LessonPackage from "../../common/LessonPackage/LessonPackage";
import Section1 from "./components/Section1";

function EigenPage() {
  return (
    <Box w="100%">
      <CommonHero>
        <Heading fontSize="5xl" mt={6} fontWeight="bold" color="white">
          Eigen verklaring
        </Heading>
      </CommonHero>

      <Stack px={[4, 10, 10, 28]}>
        <Section1 />
        <LessonPackage />
      </Stack>

      <CallBackReq />
      <Partners />
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
