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
                            <Heading size="xl">Opfriscursus</Heading>

                            <Text fontSize="14px" py={2}>
                                Een opfriscursus autorijden of motorrijden
                                nodig? Je hebt al een tijdje je rijbewijs, maar
                                omdat je niet zo vaak in de auto of motor rijdt,
                                voel je je toch nog onzeker in het verkeer.
                                Inparkeren is nog steeds geen succes en ook het
                                invoegen op de snelweg gaat niet echt met gemak.
                                Autorijden was toch stukken makkelijker toen je
                                instructeur naast je zat!
                            </Text>

                            <Text fontSize="14px" py={2}>
                                Speciaal voor deze bestuurders hebben we een
                                opfriscursus auto rijden ontwikkeld, waarin je
                                weer vertrouwd raakt met de auto. Voornamelijk
                                met de bijzondere verrichtingen en waardoor je
                                je weer zeker gaat voelen in het verkeer. De
                                rijlessen worden gehouden in onze lesauto, zodat
                                je zeker weet dat er niks fout kan gaan. Tijdens
                                deze ritten krijg je precies de tips die voor
                                jou van belang zijn. Hierdoor gaat het rijden
                                straks veel gemakkelijker.
                            </Text>

                            <Text fontSize="14px" py={2}>
                                Meld je hieronder aan voor je intake!
                            </Text>

                            <Box width="100%" shadow="xl" p={5} rounded="xl">
                                <Text fontSize="14px" py={2}>
                                    4 Opfrislessen
                                    ------------------------------------ €180
                                </Text>
                                <Text fontSize="14px" py={2}>
                                    8 Opfrislessen
                                    ------------------------------------ €360
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
