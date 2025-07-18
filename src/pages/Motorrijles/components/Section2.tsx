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

import imagery from "../../../assets/img/motor2.webp";
import ContactBtns from "../../../common/Button/ContactBtns";

export default function Section2() {
    return (
        <Container>
            <Box my={10}>
                <Section
                    leftContent={
                        <Box borderRadius="lg" overflow="hidden" w="100%">
                            <Image
                                src={imagery}
                                alt=""
                                w="100%"
                                h="auto"
                                p={10}
                            />
                        </Box>
                    }
                    rightContent={
                        <VStack align="start" p={5}>
                            <Heading size="xl">
                                Motorkleding bij Diep Opleidingen
                            </Heading>
                            <Text fontSize="14px" py={2}>
                                Bij Diep Opleidingen stellen we veiligheid
                                voorop, daarom voorzien wij onze leerlingen van
                                de essentiële motorkleding voor hun rijlessen.
                                We willen ervoor zorgen dat elke leerling
                                comfortabel en goed beschermd de weg op gaat.
                            </Text>
                            <Heading size="md" py={2}>
                                Wat krijgen onze leerlingen van ons?
                            </Heading>
                            <VStack align="start" pt={2}>
                                {[
                                    "Een helm: De helm is van vitaal belang voor de bescherming van het hoofd tijdens het rijden.",
                                    "Handschoenen: Om de handen te beschermen en grip te bieden op de motor.",
                                    "Een jas en broek: Beschermende kleding die bijdraagt aan de veiligheid van de rijder."
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
                                Hoewel wij helmen, handschoenen, jassen en
                                broeken verstrekken, benadrukken we het belang
                                van het hebben van eigen motorkleding voor
                                hygiënische redenen. Het hebben van persoonlijke
                                kleding zorgt voor een schone en comfortabele
                                rijervaring voor elke leerling.
                            </Text>

                            <Heading size="md" py={2}>
                                Wat moeten leerlingen zelf aanschaffen?
                            </Heading>

                            <Text fontSize="14px" py={2}>
                                – Schoenen: Leerlingen dienen zelf schoenen aan
                                te schaffen die tot boven de enkels reiken. Dit
                                is essentieel voor de bescherming van de voeten
                                en enkels tijdens het rijden.
                            </Text>

                            <Text fontSize="14px" py={2}>
                                Bij Diep Opleidingen streven we ernaar om onze
                                leerlingen de best mogelijke rijervaring te
                                bieden, met aandacht voor veiligheid, comfort en
                                hygiëne. Met de juiste motorkleding kunnen onze
                                leerlingen met vertrouwen de weg op.
                            </Text>

                            <ContactBtns
                                leftIcon={
                                    <Icon
                                        as={
                                            MdPhone as unknown as React.ElementType
                                        }
                                    />
                                }
                                leftText="085 060 41 10"
                                rightText="Gratis proefles aanvragen"
                            />
                        </VStack>
                    }
                />
            </Box>
        </Container>
    );
}
