import { Box, Heading, Icon, Image, Text, VStack } from "@chakra-ui/react";
import { Container } from "../../../styling/layout";
import Section from "../../../common/Section";

import secImg from "../../../assets/img/informatie5.webp";
import { MdPhone } from "react-icons/md";
import ContactBtns from "../../../common/Button/ContactBtns";

export default function RijbewijsHalen({ region }: any) {
    return (
        <Container>
            <Box my={10}>
                <Section
                    leftContent={
                        <Box borderRadius="lg" overflow="hidden" w="100%">
                            <Image src={secImg} alt="" w="100%" h="auto" />
                        </Box>
                    }
                    rightContent={
                        <VStack align="start">
                            <Heading size="lg">
                                Bij Rijschool Traffic je rijbewijs b halen
                            </Heading>
                            <Text fontSize="14px" py={2}>
                                Als je op zoek bent naar een rijschool om je
                                rijbewijs B te halen, dan kun je dit bij
                                RijSchool Traffic Opleidingen Autorijschool in
                                Apeldoorn op een comfortabele manier doen. We
                                hebben ervaren rijcoaches die je perfect
                                begeleiden. Ook hebben we een hoog
                                slagingspercentage bij het CBR. Dus als je je
                                autorijbewijs wilt halen, dan ben je bij ons aan
                                het juiste adres!
                            </Text>

                            <Heading fontSize={"md"}>
                                Daarom kies je voor rijlessen bij RijSchool
                                Traffic in Apeldoorn
                            </Heading>
                            <Text fontSize="14px" py={2}>
                                Ben je op zoek naar rijlessen in Apeldoorn die
                                aansluiten bij jouw behoeften? Dan is RijSchool
                                Traffic Rijschool in Apeldoorn de perfecte keuze
                                voor jou. Bij RijSchool Traffic in Apeldoorn kun
                                je lessen volgen met een unieke methode. De
                                rijlessen worden volledig aangepast aan jouw
                                wensen en de effectieve lesmethode wordt altijd
                                toegepast.
                            </Text>
                            <Text fontSize="14px" py={2}>
                                Als eerste stap kun je een vrijblijvende
                                proefles nemen. Op basis daarvan krijg je
                                persoonlijk advies over de rest van je
                                rijopleiding. Je krijgt een rijcoach toegewezen
                                die het best bij je past en er wordt bepaald
                                hoeveel lessen je waarschijnlijk nodig hebt. Ben
                                je al klaar om te beginnen met je rijopleiding
                                in Apeldoorn?
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
                />
            </Box>
        </Container>
    );
}
