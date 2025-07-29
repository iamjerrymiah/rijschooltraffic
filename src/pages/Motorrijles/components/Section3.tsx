import { Box, Heading, Icon, Image, Text, VStack } from "@chakra-ui/react";
import { Container } from "../../../styling/layout";
import Section from "../../../common/Section";
import { MdCheckCircleOutline, MdPhone } from "react-icons/md";

import imagery from "../../../assets/img/motor3.webp";
import imagery2 from "../../../assets/img/motor4.webp";
import ContactBtns from "../../../common/Button/ContactBtns";

export default function Section3() {
    return (
        <Container>
            <Box my={10}>
                <Section
                    leftContent={
                        <VStack align="start" p={5}>
                            <Heading size="xl">
                                Wil jij motorrijles in Apeldoorn volgen bij
                                RijSchool Traffic opleidingen? Dit moet je weten
                                over de verschillende categorieën motorrijbewijs
                            </Heading>

                            <Text fontSize="14px" py={2}>
                                Bij RijSchool Traffic Opleidingen bieden we
                                verschillende categorieën motorrijbewijs aan,
                                zodat je kunt kiezen op basis van je leeftijd,
                                ervaring en toekomstige rijbehoeften. Hieronder
                                vind je een overzicht van de verschillende
                                categorieën en de bijbehorende voorwaarden:
                            </Text>

                            <Heading size="md">Rijbewijs A1</Heading>
                            <VStack align="start" pt={2}>
                                {[
                                    "Leeftijd: Vanaf 17 jaar.",
                                    "Vermogen: Voor lichte motoren met een cilinderinhoud tot 125 cc en een maximaal vermogen van 11 kW.",
                                    "Praktijkexamen: Je kunt beginnen met rijlessen en praktijkexamens afleggen vanaf 17 jaar."
                                ].map((item, i) => (
                                    <Text key={i} fontSize={["14px", "12px"]}>
                                        <Icon
                                            as={
                                                MdCheckCircleOutline as unknown as React.ElementType
                                            }
                                            color="green.400"
                                            mr={2}
                                        />
                                        {item}
                                    </Text>
                                ))}
                            </VStack>

                            <Heading size="md" mt={2}>
                                Rijbewijs A2
                            </Heading>
                            <VStack align="start" pt={2}>
                                {[
                                    "Leeftijd: Vanaf 20 jaar.",
                                    "Vermogen: Voor middelzware motoren met een maximaal vermogen van 35 kW.",
                                    "Praktijkexamen: Je kunt beginnen met rijlessen en praktijkexamens afleggen vanaf 20 jaar."
                                ].map((item, i) => (
                                    <Text key={i} fontSize={["14px", "12px"]}>
                                        <Icon
                                            as={
                                                MdCheckCircleOutline as unknown as React.ElementType
                                            }
                                            color="green.400"
                                            mr={2}
                                        />
                                        {item}
                                    </Text>
                                ))}
                            </VStack>

                            <Text fontSize="14px" py={2}>
                                Je hebt bij RijSchool Traffic de mogelijkheid om
                                autorijles te volgen in zowel een
                                handgeschakelde en automaat lesauto. Let er wel
                                op dat je met een automaat rijbewijs (rijbewijs
                                B met code 78) geen handgeschakelde auto mag
                                rijden. Met een rijbewijs B mag je wel rijden in
                                een automaat auto.
                            </Text>

                            <Heading size="md">Rijbewijs A met Code 80</Heading>
                            <VStack align="start" pt={2}>
                                {[
                                    "Leeftijd: Vanaf 21 jaar.",
                                    "Vermogen: Voor zware motoren met onbeperkt vermogen.",
                                    "Praktijkexamen: Je kunt beginnen met rijlessen en praktijkexamens afleggen vanaf 21 jaar."
                                ].map((item, i) => (
                                    <Text key={i} fontSize={["14px", "12px"]}>
                                        <Icon
                                            as={
                                                MdCheckCircleOutline as unknown as React.ElementType
                                            }
                                            color="green.400"
                                            mr={2}
                                        />
                                        {item}
                                    </Text>
                                ))}
                            </VStack>

                            <Text fontSize="14px" py={2}>
                                Als je voor de rijbewijs categorie A, A code 80,
                                A2 kiest, begeleiden onze ervaren instructeurs
                                bij RijSchool Traffic je stap voor stap door het
                                proces van motorrijden. We zorgen ervoor dat je
                                de benodigde vaardigheden en kennis opdoet om
                                veilig en zelfverzekerd de weg op te gaan. Met
                                een uitgebreid lesprogramma en moderne
                                lesmaterialen bereiden we je optimaal voor op
                                het behalen van je motorrijbewijs.
                            </Text>

                            <Heading size="md">Rijbewijs A</Heading>
                            <VStack align="start" pt={2}>
                                {[
                                    "Leeftijd: Vanaf 21 jaar.",
                                    "Vermogen: Voor middelzware motoren met een maximaal vermogen van 35 kW.",
                                    "Praktijkexamen: Je kunt beginnen met rijlessen en praktijkexamens afleggen vanaf 20 jaar."
                                ].map((item, i) => (
                                    <Text key={i} fontSize={["14px", "12px"]}>
                                        <Icon
                                            as={
                                                MdCheckCircleOutline as unknown as React.ElementType
                                            }
                                            color="green.400"
                                            mr={2}
                                        />
                                        {item}
                                    </Text>
                                ))}
                            </VStack>

                            <Text fontSize="14px" py={2}>
                                Je hebt bij RijSchool Traffic de mogelijkheid om
                                autorijles te volgen in zowel een
                                handgeschakelde en automaat lesauto. Let er wel
                                op dat je met een automaat rijbewijs (rijbewijs
                                B met code 78) geen handgeschakelde auto mag
                                rijden. Met een rijbewijs B mag je wel rijden in
                                een automaat auto.
                            </Text>

                            <ContactBtns
                                leftIcon={
                                    <Icon
                                        as={
                                            MdPhone as unknown as React.ElementType
                                        }
                                    />
                                }
                                leftText="+31685841714"
                                rightText="Gratis proefles aanvragen"
                            />
                        </VStack>
                    }
                    rightContent={
                        <VStack gap={5}>
                            <Box borderRadius="lg" overflow="hidden" w="100%">
                                <Image
                                    src={imagery}
                                    alt=""
                                    w="100%"
                                    h="auto"
                                    p={10}
                                />
                            </Box>

                            <Box borderRadius="lg" overflow="hidden" w="100%">
                                <Image
                                    src={imagery2}
                                    alt=""
                                    w="100%"
                                    h="auto"
                                    p={10}
                                />
                            </Box>
                        </VStack>
                    }
                />
            </Box>
        </Container>
    );
}
