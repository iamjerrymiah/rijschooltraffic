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
                        <VStack align="start" >
                            <Heading size="xl">
                                Snel je rijopleiding afronden met de spoedcursus
                            </Heading>

                            <Text fontSize="14px" py={2}>
                                Wil jij snel je rijopleiding afronden, dan is de
                                spoedcursus misschien iets voor jou. Haal binnen
                                7, 14 of 21 dagen je rijbewijs. Als eerst wordt
                                er een intake les afgenomen. Deze duurt 120
                                minuten en is nodig zodat de rijinstructeur een
                                rijopleiding op maat in kan plannen. Er bestaat
                                een mogelijkheid dat een spoedcursus na de
                                intake wordt afgeraden. Wij willen natuurlijk
                                dat iedereen die zich aanmeld voor de
                                spoedcursus die succesvol afrond. De kosten voor
                                de intake zijn €120,-
                            </Text>

                            <Text fontSize="14px" py={2}>
                                Onze collega’s op kantoor zullen na je intake
                                direct een praktijkexamen voor je inplannen,
                                afhankelijk van het advies op je intake ook een
                                tussentijdse toets. Door de enorme drukte bij
                                het CBR doen onze collega’s extra moeite om een
                                examen vervroegd voor je in te plannen.
                            </Text>

                            <Text fontSize="14px" py={2}>
                                Meld je hieronder aan voor je intake!
                            </Text>

                            <Box width="100%" shadow="xl" p={5} rounded="xl">
                                <Text fontSize="14px" py={2}>
                                    Intakeles 120 minuten --------------------- €120
                                </Text>
                                <Text fontSize="14px" py={2}>
                                    Spoedcursus gebaseerd op de intakeles vanaf -------- €890
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
