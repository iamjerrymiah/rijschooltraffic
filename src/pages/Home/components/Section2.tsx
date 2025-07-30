import { Box, Heading, Icon, Image, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Section from "../../../common/Section";

import regionImg from "../../../assets/img/region_img.webp";
import { MdCheckCircleOutline, MdPhone } from "react-icons/md";
import ContactBtns from "../../../common/Button/ContactBtns";
import { Container } from "../../../styling/layout";

export default function HomeSection2() {
    return (
        <Container>
            <Box my={10} px={[4, 10, 10, 28]}>
                <Section
                    leftContent={
                        <Box borderRadius="lg" overflow="hidden" w="100%">
                            <Image src={regionImg} alt="" w="100%" h="auto" />
                        </Box>
                    }
                    rightContent={
                        <VStack align="start">
                            <Heading size="lg">Waarom een proefles?</Heading>
                            <Text fontSize="14px" py={2}>
                                Twijfel je nog over welk rijlespakket het beste
                                bij je past? Wil je ontdekken hoe wij rijlessen
                                verzorgen en wat onze aanpak is? Vraag dan
                                simpelweg een proefles aan.
                            </Text>
                            <VStack align="start" pt={2}>
                                {[
                                    "Direct zelf achter het stuur",
                                    "Vrijblijvend advies op maat",
                                    "Direct weten hoeveel rijlessen je nodig hebt",
                                    "De proefles is geheel vrijblijvend"
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

                            <Heading size="lg" mt={5}>
                                Vrijblijvende proefles!
                            </Heading>
                            <Text fontSize="xs" py={2}>
                                Voorafgaand aan je reguliere rijlessen, begin je
                                altijd met een proefles. Gedurende deze les
                                ontmoet je je rijinstructeur, maak je een rit in
                                de auto en ontvang je een persoonlijk advies
                                over je lessen. Hoeveel lessen je nodig zult
                                hebben, wordt bepaald op basis van dit advies.
                                Je kunt starten met de rijlessen vanaf 16,5
                                jaar.
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
