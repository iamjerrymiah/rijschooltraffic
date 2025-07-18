import { Box, Heading, Icon, Image, Text, VStack } from "@chakra-ui/react";
import { Container } from "../../../styling/layout";
import Section from "../../../common/Section";
import { MdPhone } from "react-icons/md";

import imagery from "../../../assets/img/sec1.webp";
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
                                Hangeschakeld rijles Apeldoorn
                            </Heading>

                            <Text fontSize="14px" py={2}>
                                Wil je een autorijbewijs halen? Met een
                                rijbewijs B ben je bevoegd om een auto te
                                besturen van maximaal 3500 kg. Dankzij de
                                examengerichte rijlessen bij DIEP Opleidingen is
                                het halen van je B rijbewijs een makkie. Veel
                                leerlingen die zijn overgestapt van een andere
                                rijschool hebben ons laten weten dat zij direct
                                een verschil hebben gemerkt in de kwaliteit van
                                de rijlessen.
                            </Text>

                            <Text fontSize="14px" py={2}>
                                Nadat je bent geslaagd, mag je uiteraard ook
                                gewoon in een automaat auto rijden. Dus indien
                                je geen speciale redenen hebt, raden wij je aan
                                om rijles te volgen in een handgeschakelde
                                lesauto. Eenmaal gewend aan schakelen, zal dat
                                met de tijd automatisch gebeuren zonder dat je
                                daar veel aandacht aan hoeft te besteden.
                            </Text>

                            <Text fontSize="14px" py={2}>
                                Onze ervaren instructeurs zullen je goed
                                begeleiden zodat jij het schakelen goed onder de
                                knie zult krijgen. Je zult alle tips en tricks
                                meekrijgen waardoor je de auto soepel zal
                                besturen. Wees gerust, want onze geduldige
                                instructeurs begeleiden je overal door heen.
                                Vertrouw op ons, maar ook op jezelf!
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
