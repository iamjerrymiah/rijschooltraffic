import {
  Box,
  Button,
  Heading,
  Icon,
  Image,
  Text,
  VStack
} from "@chakra-ui/react";
import { Container } from "../../../styling/layout";
import Section from "../../../common/Section";
import { MdCheckCircleOutline, MdPhone } from "react-icons/md";

import imagery from "../../../assets/img/sec1.webp";
import ContactBtns from "../../../common/Button/ContactBtns";

export default function Section1() {
  return (
    <Container>
      <Box my={10}>
        <Section
          leftContent={
            <Box borderRadius="lg" overflow="hidden" w="100%">
              <Image
                src={imagery} // Replace with your actual image path
                alt=""
                w="100%"
                h="auto"
                p={10}
              />
            </Box>
          }
          rightContent={
            <VStack align="start" p={5}>
              <Heading size="xl">Over DIEP Opleidingen</Heading>

              <Text fontSize="14px" py={2}>
                DIEP Opleidingen is een rijschool dat is opgericht in 2012. Wij
                hechten waarde aan transparantie en betrouwbaarheid. Wij willen
                voornamelijk onze leerlingen leren om zo veilig mogelijk te
                anticiperen in het verkeer. Al onze rijinstructeurs zijn
                vakbekwaam en ervaren. Onze rijinstructeurs begeleiden op een
                geduldige en enthousiaste wijze tijdens de rijlessen.
              </Text>

              <VStack align="start" pt={2}>
                {[
                  "Zeer lage tarieven",
                  "Geen wachttijd, direct starten met je rijopleiding",
                  "Proefles geheel vrijblijvend"
                ].map((item, i) => (
                  <Text key={i} fontSize={["14px", "12px"]}>
                    <Icon
                      as={MdCheckCircleOutline as unknown as React.ElementType}
                      color="green.400"
                      mr={2}
                    />
                    {item}
                  </Text>
                ))}
              </VStack>

              <Text fontSize="14px" py={2}>
                Onze lesauto’s zijn altijd goed onderhouden en verzekerd volgens
                de normen. We hebben een unieke, uitgebreide leerlingen app met
                instructiekaart. Je hebt inzage op rooster van jouw
                rijinstructeur en kunt zelf je rijles inplannen. Wij zijn zeer
                succesvol in de sector en geven ook nog eens rijles in het
                Engels. Wij zijn van mening dat wij de meest kwalitatieve
                rijopleiding geven!
              </Text>

              <ContactBtns
                leftIcon={<Icon as={MdPhone as unknown as React.ElementType} />}
                leftText=" 085 060 41 10"
                rightText="Gratis proefles aanvragen"
              />
            </VStack>
          }
        />
      </Box>
    </Container>
  );
}
