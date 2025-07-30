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

export default function Section3() {
    return (
        <Container>
            <Box my={10}>
                <Section
                    leftContent={
                        <VStack align="start" p={5}>
                            <Heading size="xl">
                                Automaat rijles Apeldoorn
                            </Heading>

                            <Text fontSize="14px" py={2}>
                                Heb je moeite met het besturen van een
                                handgeschakeld lesauto of wil je door ande privé
                                of medische redenen les volgen in automaat
                                lesauto? Dat kan bij RijSchool Traffic
                                Opleidingen! Nadat je bent geslaagd voor je
                                rijbewijs, krijg je een rijbewijs B met code 78.
                                Je kunt hiermee enkel rijden in een automaat
                                auto en mag je dus geen handgeschakeld auto mee
                                besturen.
                            </Text>

                            <Text fontSize="14px" py={2}>
                                Het besturen van een automaat auto is uiteraard
                                wel gemakkelijker. Je hoeft je niet bezig te
                                houden met de koppeling en hoeft niet
                                voortdurend op en neer te schakelen. Een
                                automaat auto bied veel gemak tijdens het rijden
                                en is vooral superhandig in files.
                            </Text>

                            <Text fontSize="14px" py={2}>
                                Ook tijdens de rijlessen is het slagen een stuk
                                makkelijker, omdat je meer aandacht kan besteden
                                aan het verkeer doordat je niet hoeft te
                                schakelen. Dankzij onze professionele
                                begeleiding met de automaat rijlessen zal het
                                halen van je B rijbewijs met code 78 super
                                eenvoudig zijn!
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
