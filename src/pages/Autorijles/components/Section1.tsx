import {
    Box,
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
                        <VStack align="start">
                            <Heading size="xl">
                                Haal je rijbewijs B bij DIEP Opleidingen; de 1#
                                autorijschool in Apeldoorn en omstreken!
                            </Heading>

                            <Text fontSize="14px" py={2}>
                                Het behalen van je rijbewijs B is een grote stap
                                naar het volwassen worden. Daarom vinden wij het
                                belangrijk om onze leerlingen op een
                                verantwoordelijke en veilige manier, vlot worden
                                voorbereid om in één keer het rijbewijs te
                                halen. Dit doen we samen met onze zeer ervaren
                                instructeurs. In een prettige en leerzame
                                omgeving. Dit is terug te zien in ons zeer hoge
                                slagingspercentage.
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
                                Je hebt bij DIEP Opleidingen de mogelijkheid om
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
                                leftText="085 060 41 10"
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
