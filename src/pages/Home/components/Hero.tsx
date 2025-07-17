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
  Stack
} from "@chakra-ui/react";

import heroImg from "../../../assets/img/hero-img.png";
import { Container } from "../../../styling/layout";

export default function Hero({ region }: any) {
    return (
        <Box
            bgImage={heroImg} // Replace with your actual image path
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
                <Heading size="2xl">Rijschool{" "}
                    <Text as="span" color="#00AEEF">
                        {region ? region : "Apeldoorn"}
                    </Text>
                </Heading>

                <Text fontSize="xl" mt={2} fontWeight="bold" color="orange.300">De beste start voor je rijopleiding sinds 2012! </Text>

                <Text mt={4} fontSize="md">
                    Wij van Rijschool Apeldoorn geven jou de meest kwalitatieve
                    rijopleidingen van Nederland. Wij werken persoonsgericht en kijken
                    naar wat jij nodig hebt om je rijbewijs in één keer te halen. Plan
                    nu je proefles in en ervaar het zelf!
                </Text>

                <VStack mt={4} align="start" spacing={2}>
                    {[
                        "De rijschool bestaat sinds 2012",
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

                <Flex mt={6} gap={[4, 2]} direction={["column", "row"]}>
                <Button
                    fontSize={"12px"}
                    fontWeight={400}
                    colorScheme="blue"
                    variant="solid"
                >
                    📞085 060 41 10
                </Button>
                <Button fontSize={"12px"} fontWeight={400} colorScheme="orange">
                    Gratis proefles aanvragen →
                </Button>
                </Flex>
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

                <Text fontSize="15px" mb={4} textAlign="center">Proefles is gratis i.c.m. een lespakket.</Text>

                <Stack px={6}>
                    <Select
                        fontSize={"12px"}
                        fontWeight={400}
                        placeholder="Selecteer je opleiding"
                    />
                    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4}>
                        <Input
                            fontSize={"12px"}
                            fontWeight={400}
                            placeholder="Achternaam"
                        />
                        <Input
                            fontSize={"12px"}
                            fontWeight={400}
                            placeholder="Geboortedatum"
                        />
                        <Input fontSize={"12px"} fontWeight={400} placeholder="Email" />
                        <Input
                            fontSize={"12px"}
                            fontWeight={400}
                            placeholder="Woonplaats"
                        />
                        <Input
                            fontSize={"12px"}
                            fontWeight={400}
                            placeholder="Postcode"
                        />
                        <Input fontSize={"12px"} fontWeight={400} placeholder="Adres" />
                        <Input
                            fontSize={"12px"}
                            fontWeight={400}
                            placeholder="Telefoonnummer"
                        />
                        <Select
                            fontSize={"12px"}
                            fontWeight={400}
                            placeholder="Hoe heb je ons gevonden?"
                        />
                    </SimpleGrid>
                    <Textarea
                        fontSize={"12px"}
                        fontWeight={400}
                        placeholder="Eventuele bericht (niet verplicht)"
                        mt={4}
                    />
                </Stack>

                <Button
                    fontSize={"12px"}
                    fontWeight={400}
                    colorScheme="orange"
                    w="100%"
                    mt={4}
                >
                Gratis proefles aanvragen →
                </Button>
            </Box>
            </Flex>
        </Container>
        </Box>
    );
}
