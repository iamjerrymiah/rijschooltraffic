import { Box, Heading, Icon, Image, Text, VStack } from "@chakra-ui/react";
import { Container } from "../../../styling/layout";
import Section from "../../../common/Section";
import { MdPhone } from "react-icons/md";

import imagery from "../../../assets/img/sec1.webp";
import ContactBtns from "../../../common/Button/ContactBtns";

export default function Section1() {
    return (
        <Container>
            <Box my={10}>
                <Section
                    leftContent={
                        <VStack align="start">
                            <Heading size="xl">De theoriecursus</Heading>

                            <Text fontSize="14px" py={2}>
                                Bij RijSchool Traffic Opleidingen zorgen wij
                                ervoor dat je binnen 1 dag 100% kan slagen voor
                                je theorie examen. Er hoeft geen boek voor open
                                geslagen te worden. Dus als je moeite hebt met
                                leren of gewoon geen zin hebt om alle regels uit
                                een boek te leren; dan is onze cursus iets voor
                                jou!
                            </Text>

                            <Heading size="md">Hoge slagingskans</Heading>
                            <Text fontSize="14px" py={2}>
                                Door de jarenlange ervaring hebben wij een
                                unieke en zeer goede lesmethode ontwikkeld
                                waarmee wij een zeer hoge slagingskans kunnen
                                geven met onze theorie cursus. Bij ons hoef je
                                geen saai boek open te slaan of dagen/weken lang
                                thuis te leren voor je theorie examen. Door
                                middel van onze makkelijke manier van uitleg en
                                ezelsbruggetjes kan je de regels makkelijk
                                onthouden waardoor ook jij in één keer kan
                                slagen! Met onze unieke lesmethode geven we
                                alleen maar examengericht les, dat betekent dat
                                bijna alle vragen die we oefenen, jij in het
                                examen kan tegenkomen!
                            </Text>

                            <Heading size="md">
                                Dyslectie, concentratie problemen of faalangst?
                            </Heading>
                            <Text fontSize="14px" py={2}>
                                Dyslectie, concentratie problemen, faalangst of
                                gewoon moeite met leren? Dat is voor ons geen
                                probleem! Onze cursus is makkelijk te volgen en
                                onze cursus leiders zullen extra aandacht bieden
                                daar waar het nodig is.
                            </Text>

                            <Box width="100%" shadow="xl" p={5} rounded="xl">
                                <Heading pb={4} fontSize="md">
                                    Kun je geen cursus volgen omdat je naar
                                    school moet of moet werken?
                                </Heading>
                                <Text fontSize="14px" py={2}>
                                    Dan hebben wij een online video cursus met
                                    oefenexamens zodat je kunt leren wanneer het
                                    jou uitkomt!
                                </Text>
                            </Box>

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
