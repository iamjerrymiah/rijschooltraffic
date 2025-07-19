import { Box, Stack } from "@chakra-ui/react";
import Hero from "../../pages/Home/components/Hero";
import Section1 from "../../pages/Home/components/Section1";

import FeaturesGrid from "../../pages/Home/components/FeaturesGrid";
import CourseGrid from "../../pages/Home/components/CourseGrid";
import { Container } from "../../styling/layout";
import HomeSection2 from "../../pages/Home/components/Section2";
import GetDriverLicense from "../../pages/Home/components/GetDriverLicense";
import AutorijlesApeldoorn from "../../pages/Home/components/AutorijlesApeldoorn";
import SpoedcursusApeldoorn from "../../pages/Home/components/SpoedcursusApeldoorn";
import MotorrijschoolApeldoorn from "../../pages/Home/components/MotorrijschoolApeldoorn";
import OpfriscursusApeldoorn from "../../pages/Home/components/OpfriscursusApeldoorn";
import TheoriecursusApeldoorn from "../../pages/Home/components/TheoriecursusApeldoorn";
import Partners from "../../pages/Home/components/Partners";
import Reviews from "../../pages/Home/components/Reviews";
import LessonPackage from "../LessonPackage/LessonPackage";

export default function Region({ region }: any) {
    return (
        <Box w="100%">
            <Hero region={region} />

            <Container>
                <Stack px={[4, 10, 10, 28]} py={10}>
                    <FeaturesGrid />
                    <Section1 />
                </Stack>
            </Container>

            <CourseGrid />
            <HomeSection2 />
            <GetDriverLicense />
            <Container>
                <Stack px={[4, 10, 10, 28]}>
                    <AutorijlesApeldoorn region={region} />
                    <SpoedcursusApeldoorn region={region} />
                    <MotorrijschoolApeldoorn region={region} />
                    <OpfriscursusApeldoorn region={region} />
                    <TheoriecursusApeldoorn region={region} />
                </Stack>
                <Partners />
                <Reviews />
                <Stack px={[4, 10, 10, 28]}>
                    <LessonPackage />
                </Stack>
            </Container>
        </Box>
    );
}
