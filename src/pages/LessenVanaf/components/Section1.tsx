import {
  Box,
  Button,
  Heading,
  Icon,
  Image,
  Text,
  VStack
} from "@chakra-ui/react";
import Section from "../../../common/Section";
import ContactBtns from "../../../common/Button/ContactBtns";
import { MdPhone } from "react-icons/md";

import imagery from "../../../assets/img/lessen_vanaf.webp";
import googleReview from "../../../assets/img/google-reviews.webp";

export default function Section1() {
  return (
    <Box mt={10}>
      <Section
        leftContent={
          <Box borderRadius="lg" overflow="hidden" w="100%">
            <VStack align="start" p={5}>
              <Heading size="xl">Rijlessen vanaf 16,5 </Heading>

              <Text fontSize="14px" py={2}>
                Rijlessen vanaf 16 jaar oud? Dat kan! Vanaf 16,5 om precies te
                zijn. Bij DIEP Opleidingen kun je al je theoriecertificaat halen
                als je 16 jaar oud bent. Zodra je 16,5 bent dan kun je al je
                eerste rijles volgen bij een van onze rijinstructeurs!
              </Text>

              <ContactBtns
                leftIcon={<Icon as={MdPhone as unknown as React.ElementType} />}
                leftText="085 060 41 10"
                rightText="Gratis proefles aanvragen"
                removeRightBtn={true}
              />
            </VStack>
          </Box>
        }
        rightContent={
          <Section
            gap={1}
            leftContent={
              <Box
                textAlign="center"
                shadow="lg"
                borderRadius="lg"
                overflow="hidden"
                w="100%"
                p={10}
              >
                <Heading size="md">
                  99% VAN ONZE KLANTEN BEVEELT ONS AAN JOU AAN!
                </Heading>
                <Image
                  mx="auto"
                  src={googleReview}
                  alt="Google"
                  w={["50%", "50%", "50%", "100%"]}
                  h="auto"
                  p={4}
                />
                {/* <Button
                  fontSize={"12px"}
                  fontWeight={400}
                  colorScheme="orange"
                  w="100%"
                  mt={4}
                >
                  Ja, bel mij terug! →
                </Button> */}
              </Box>
            }
            rightContent={
              <Box borderRadius="lg" overflow="hidden" w="100%">
                <Image src={imagery} alt="" w="100%" h="auto" p={5} />
              </Box>
            }
          />
        }
      />
    </Box>
  );
}
