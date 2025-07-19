import { Box, Heading, Stack } from "@chakra-ui/react";
import PageMainContainer from "../../common/PageMain/PageMain";
import Partners from "../Home/components/Partners";
import CommonHero from "../../common/Hero/CommonHero";
import CallBackReq from "../../common/CallBackReq/CallBackReq";
import LessonPackage from "../../common/LessonPackage/LessonPackage";
import Reviews from "../Home/components/Reviews";

function WistPage() {
  return (
    <Box w="100%">
      <CommonHero>
        <Heading fontSize="5xl" mt={6} fontWeight="bold" color="white">
          Wist jij dat …
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

export default function Wist() {
  return (
    <PageMainContainer title="Wist jij dat" description="">
      <WistPage />
    </PageMainContainer>
  );
}
