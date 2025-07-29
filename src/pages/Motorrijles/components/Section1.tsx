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

import imagery from "../../../assets/img/motor1.webp";
import ContactBtns from "../../../common/Button/ContactBtns";

export default function Section1() {
    return (
        <Container>
            <Box my={10}>
                <Section
                    leftContent={
                        <VStack align="start">
                            <Heading size="xl">
                                Volg motorrijlessen in Apeldoorn bij RijSchool
                                Traffic Opleidingen
                            </Heading>

                            <Text fontSize="14px" py={2}>
                                Het behalen van je motorrijbewijs opent de deur
                                naar avontuur op de weg en biedt je de vrijheid
                                om te genieten van het motorrijden. Bij
                                RijSchool Traffic Opleidingen begrijpen we de
                                essentie van veiligheid en vertrouwen bij het
                                leren rijden op een motor. Onze ervaren
                                instructeurs staan klaar om je te begeleiden
                                naar het behalen van je motorrijbewijs, waarbij
                                veiligheid, plezier en vertrouwen centraal
                                staan. Met een gestructureerd lesprogramma en
                                persoonlijke begeleiding zorgen we ervoor dat je
                                klaar bent om zelfverzekerd de weg op te gaan.
                            </Text>

                            <VStack align="start" pt={2}>
                                {[
                                    "Examengerichte rijlessen",
                                    "Hoog slagingspercentage",
                                    "Goed onderhouden lesauto’s"
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
                                Bij RijSchool Traffic Opleidingen bieden we
                                motorrijlessen aan die gericht zijn op het
                                behalen van je motorrijbewijs categorie A, A
                                code 80 en A2. Voor de categorie A1 geven wij
                                momenteel nog geen rijles. Onze lessen zijn
                                examengericht, waardoor je vertrouwd raakt met
                                de exameneisen en -routes van het CBR. Of je nu
                                een beginner bent of al enige ervaring hebt,
                                onze instructeurs passen de lessen aan op jouw
                                niveau en leerstijl, zodat je optimaal
                                voorbereid bent op het praktijkexamen.
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
                />
            </Box>
        </Container>
    );
}
