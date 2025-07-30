import { Box, Heading, Icon, Image, Text, VStack } from "@chakra-ui/react";
import { Container } from "../../../styling/layout";
import Section from "../../../common/Section";

import secImg from "../../../assets/img/informatie5.webp";
import { MdCheckCircleOutline, MdPhone } from "react-icons/md";
import ContactBtns from "../../../common/Button/ContactBtns";

export default function RijlessenVanaf() {
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
                                Rijlessen vanaf 16,5 jaar
                            </Heading>
                            <Text fontSize="14px" py={2}>
                                Ben je ouder dan 16,5 jaar? Dan kun je bij
                                Rijschool RijSchool Traffic Opleidingen in
                                Apeldoorn beginnen met het volgen van rijlessen.
                                Wij bieden elke leerling een rijopleiding op
                                maat. Onze rijschool biedt nieuwe lesauto’s en
                                vriendelijke rij-instructeurs. Dankzij onze
                                goede lesmethode heb je minder rijlessen nodig.
                                Leer veilig, efficiënt en aangenaam rijden. Het
                                is mogelijk om meerdere keren per week rijles te
                                volgen en we bieden goedkope pakketten waarbij
                                je in termijnen kunt betalen.
                            </Text>
                            <VStack align="start" pt={2}>
                                {[
                                    "Zeer scherpe tarieven",
                                    "Rijlessen op jouw eigen tempo",
                                    "Hoog slagingspercentage"
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

                            <Heading size={"md"}>
                                Veilig en verantwoord leren rijden
                            </Heading>
                            <Text fontSize="14px" py={2}>
                                Bij ons is het belangrijkste dat onze leerlingen
                                het beste krijgen. We willen niet alleen helpen
                                bij het behalen van het rijbewijs, maar ook bij
                                het veilig en verantwoord deelnemen aan het
                                verkeer. We bieden moderne en goed onderhouden
                                auto’s en onze rijlessen worden altijd gegeven
                                door dezelfde instructeur. Bij ons ben je aan
                                het goede adres voor een succesvolle
                                rijopleiding en we garanderen dat je veilig en
                                verantwoord je rijbewijs haalt.
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
