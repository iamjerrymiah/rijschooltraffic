import {
    Box,
    Flex,
    VStack,
    Text,
    Heading,
    Input,
    Select,
    Textarea,
    Button,
    SimpleGrid,
    Stack,
    Icon
} from "@chakra-ui/react";

import heroImg from "../../../assets/img/hero-img.png";
import { Container } from "../../../styling/layout";
import TrialForm from "../../../common/Form/TrialFrom";
import ContactBtns from "../../../common/Button/ContactBtns";
import { MdPhone } from "react-icons/md";

export default function Hero({ region }: any) {
    return (
        <Box
            bgImage={heroImg}
            bgSize="cover"
            bgPosition="center"
            minH="100vh"
            px={[4, 8, 8, 20]}
            py={{ base: 6, md: 12 }}
        >
            <Container>
                <Flex
                    direction={{ base: "column", lg: "row" }}
                    justify="space-between"
                    align="flex-start"
                    gap={10}
                    m={[4, 4, 4, 10]}
                >
                    {/* Left Column */}
                    <Box color="white" maxW="600px">
                        <Heading size="2xl">
                            Rijschool{" "}
                            <Text as="span" color="#00AEEF">
                                {region ? region : "Traffic"}
                            </Text>
                        </Heading>

                        <Text
                            fontSize="xl"
                            mt={2}
                            fontWeight="bold"
                            color="orange.300"
                        >
                            De beste start voor je rijopleiding sinds 2009!{" "}
                        </Text>

                        <Text mt={4} fontSize="md">
                            Wij van Rijschool {region ? region : "Apeldoorn"}{" "}
                            geven jou de meest kwalitatieve rijopleidingen van
                            Nederland. Wij werken persoonsgericht en kijken naar
                            wat jij nodig hebt om je rijbewijs in één keer te
                            halen. Plan nu je proefles in en ervaar het zelf!
                        </Text>

                        <VStack mt={4} align="start" spacing={2}>
                            {[
                                "De rijschool bestaat sinds 2009",
                                "Duidelijk en eerlijk, geen kleine lettertjes!",
                                "Veiligheid staat op voorop",
                                "Enthousiaste en geduldige rijinstructeurs",
                                "Goede onderhouden lesauto’s",
                                "Auto’s verzekerd volgens norm",
                                "Hoog slagingspercentage",
                                "Uitgebreide app, met instructiekaart",
                                "Inzage op roosters van je instructeur en zelf inplannen",
                                "10+ jaar succesvol in de branche",
                                "Rijles in het Engels",
                                "DE MEEST KWALITATIEVE RIJOPLEIDING"
                            ].map((item, index) => (
                                <Text key={index} fontSize={["sm", "12px"]}>
                                    • {item}
                                </Text>
                            ))}
                        </VStack>

                        <ContactBtns
                            leftIcon={
                                <Icon
                                    as={MdPhone as unknown as React.ElementType}
                                />
                            }
                            leftText="+31685841714"
                            rightText="Gratis proefles aanvragen"
                        />
                    </Box>

                    {/* Right Column - Form */}
                    <Box
                        bg="white"
                        borderRadius="lg"
                        boxShadow="lg"
                        w={["100%", "100%", "100%", "400px"]}
                    >
                        <Box
                            bg={"orange.600"}
                            borderTopRadius="lg"
                            p={4}
                            mb={2}
                            textAlign="center"
                            color="white"
                            fontWeight="bold"
                        >
                            Proefles aanvragen
                        </Box>

                        <Text fontSize="15px" mb={4} textAlign="center">
                            Proefles is gratis i.c.m. een lespakket.
                        </Text>

                        <TrialForm />
                    </Box>
                </Flex>
            </Container>
        </Box>
    );
}
