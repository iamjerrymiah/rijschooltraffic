import {
  Box,
  Button,
  Center,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack
} from "@chakra-ui/react";
import Hero from "../../pages/Home/components/Hero";
import { MdCheckCircleOutline, MdPhone } from "react-icons/md";
import Section1 from "../../pages/Home/components/Section1";

import imagery from "../../assets/img/eigen1.webp";
import regionImg from "../../assets/img/region_img.webp";
import informatie3 from "../../assets/img/informatie3.webp";
import region3Img from "../../assets/img/region3_img.webp";
import Section from "../Section";
import ContactBtns from "../Button/ContactBtns";

export default function Region({ region }: any) {
  const cards = [
    {
      title: "Geen wachttijden",
      text: `Wij hebben meerdere rijinstructeurs, dus je kunt direct starten met rijlessen.`
    },
    {
      title: "Rijlessen vanaf 16,5 jaar",
      text: `Je kunt bij DIEP Opleidingen al vanaf 16,5 jaar beginnen met rijlessen en slagen op je 17e verjaardag!`
    },
    {
      title: "Betalen in termijnen",
      text: `Wil je niet alles in 1 keer betalen? Je kunt de lespakket die bij jou past veilig via iDeal betalen in termijnen!`
    },
    {
      title: "Schakel en automaat",
      text: `Je hebt bij ons de keuze om rijles te volgen in een handgeschakelde of automaat lesauto.`
    }
  ];
  const images = [imagery, imagery, imagery, imagery, imagery];

  return (
    <Box w="100%">
      <Hero region={region} />
      <Stack px={[4, 10, 10, 10]}>
        <SimpleGrid columns={{ base: 1, lg: 2, xl: 4 }} spacing={3}>
          {cards.map((card, i) => {
            return (
              <Box key={i} shadow="xl" p={10} rounded={40} gap={30}>
                <Center>
                  <Icon
                    as={MdCheckCircleOutline as unknown as React.ElementType}
                    color="green.400"
                    fontSize={50}
                  />
                </Center>
                <Heading textAlign="center" fontSize="lg" py={5}>
                  {card.title}
                </Heading>
                <Text
                  textAlign="center"
                  fontWeight="light"
                  fontSize="sm"
                  pb={7}
                >
                  {card.text}
                </Text>
                <Center>
                  <Button
                    fontSize={"12px"}
                    fontWeight={400}
                    colorScheme="orange"
                  >
                    Gratis proefles aanvragen
                  </Button>
                </Center>
              </Box>
            );
          })}
        </SimpleGrid>
      </Stack>
      <Stack px={[4, 10, 10, 28]} py={10}>
        <Section1 />
      </Stack>
      <Stack backgroundColor="whitesmoke" px={[4, 10, 10, 28]} py={20}>
        <Box>
          <Center>
            <Heading fontSize="4xl">Onze opleidingen</Heading>
          </Center>
          <Text align="center" py={5}>
            Wil je ook een opleiding volgen bij ons? Hieronder kan je een
            overzicht zien van de kwalitatieve, maar betaalbare opleidingen die
            wij te bieden hebben.
          </Text>
          <SimpleGrid columns={{ base: 1, lg: 3, xl: 5 }} spacing={3}>
            {images.map((image, i) => {
              return (
                <Box key={i} borderRadius="lg" overflow="hidden" w="100%">
                  <Image src={image} alt="" w="100%" h="auto" />
                </Box>
              );
            })}
          </SimpleGrid>
        </Box>
      </Stack>
      <Box my={10}>
        <Section
          leftContent={
            <Box borderRadius="lg" overflow="hidden" w="100%">
              <Image src={regionImg} alt="" w="100%" h="auto" p={10} />
            </Box>
          }
          rightContent={
            <VStack align="start" p={5}>
              <Heading size="xl">Waarom een proefles?</Heading>

              <Text fontSize="14px" py={2}>
                Twijfel je nog over welk rijlespakket het beste bij je past? Wil
                je ontdekken hoe wij rijlessen verzorgen en wat onze aanpak is?
                Vraag dan simpelweg een proefles aan.
              </Text>

              <VStack align="start" pt={2}>
                {[
                  "Direct zelf achter het stuur",
                  "Vrijblijvend advies op maat",
                  "Direct weten hoeveel rijlessen je nodig hebt",
                  "De proefles is geheel vrijblijvend"
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

              <Heading size="xl" mt={5}>
                Vrijblijvende proefles!
              </Heading>
              <Text fontSize="14px" py={2}>
                Voorafgaand aan je reguliere rijlessen, begin je altijd met een
                proefles. Gedurende deze les ontmoet je je rijinstructeur, maak
                je een rit in de auto en ontvang je een persoonlijk advies over
                je lessen. Hoeveel lessen je nodig zult hebben, wordt bepaald op
                basis van dit advies. Je kunt starten met de rijlessen vanaf
                16,5 jaar.
              </Text>

              <ContactBtns
                leftIcon={<Icon as={MdPhone as unknown as React.ElementType} />}
                leftText="085 060 41 10"
                rightText="Gratis proefles aanvragen"
              />
            </VStack>
          }
        />
      </Box>
      <Stack backgroundColor="whitesmoke" px={[4, 10, 10, 28]} py={20}>
        <Box>
          <Center>
            <Heading fontSize="4xl">Onze opleidingen</Heading>
          </Center>
          <Text align="center" py={5}>
            Wil je ook een opleiding volgen bij ons? Hieronder kan je een
            overzicht zien van de kwalitatieve, maar betaalbare opleidingen die
            wij te bieden hebben.
          </Text>
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={4}>
            <Box
              borderRadius="lg"
              overflow="hidden"
              w="100%"
              p={10}
              shadow="xl"
              rounded="xl"
            >
              <Image src={informatie3} alt="" w="100%" h="380px" />
              <Center>
                <Heading fontSize="sm" my={5} px={5}>
                  Rijlespakketten
                </Heading>
              </Center>
              <Text align="center" px={5}>
                Bij DIEP Opleidingen bieden wij verschillende voordelige
                pakketten aan. We kunnen ook een pakket volledig op maat maken
                wat precies past bij jou.
              </Text>
              <Center>
                <Button
                  fontSize={"12px"}
                  fontWeight={400}
                  colorScheme="orange"
                  my={5}
                >
                  Bekijk pakketten
                </Button>
              </Center>
            </Box>
            <Box
              borderRadius="lg"
              overflow="hidden"
              w="100%"
              p={10}
              shadow="xl"
              rounded="xl"
            >
              <Image src={region3Img} alt="" w="100%" h="380px" />
              <Center>
                <Heading fontSize="sm" my={5} px={5}>
                  Binnen 1 maand je rijbewijs
                </Heading>
              </Center>
              <Text align="center" px={5}>
                Je vraagt je zeker af hoe dat kan. Door middel van onze unieke
                examen gerichte les methode en onze unieke instructie video’s
                kan jij binnen 1 maand je rijbewijs halen
              </Text>
              <Center>
                <Button
                  fontSize={"12px"}
                  fontWeight={400}
                  colorScheme="orange"
                  my={5}
                >
                  Meer informatie
                </Button>
              </Center>
            </Box>
          </SimpleGrid>
        </Box>
      </Stack>
    </Box>
  );
}
