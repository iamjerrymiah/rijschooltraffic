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

import heroImg from "../../assets/img/overons_hero.jpeg";
import { Container } from "../../styling/layout";
import ContactBtns from "../Button/ContactBtns";
import { MdPhone } from "react-icons/md";

export default function ReqTrialLesson({ region }: any) {
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
                            Daarom{" "}
                            <Text as="span" color="orange">
                                DIEP
                            </Text>
                        </Heading>

                        <VStack my={4} align="start" spacing={2}>
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

                        <ContactBtns
                            leftIcon={
                                <Icon
                                    as={MdPhone as unknown as React.ElementType}
                                />
                            }
                            leftText="085 060 41 10"
                            removeRightBtn={true}
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
                            Meld je aan voor een opleiding
                        </Box>

                        <Text fontSize="15px" mb={4} textAlign="center" px={5}>
                            U wordt vervolgens binnen 2 werkdagen vrijblijvend
                            teruggebeld
                        </Text>

                        <Stack px={6}>
                            <Select
                                fontSize={"12px"}
                                fontWeight={400}
                                placeholder="Selecteer je opleiding"
                            />
                            <SimpleGrid
                                columns={{ base: 1, md: 2 }}
                                spacing={4}
                            >
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
                                <Input
                                    fontSize={"12px"}
                                    fontWeight={400}
                                    placeholder="Email"
                                />
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
                                <Input
                                    fontSize={"12px"}
                                    fontWeight={400}
                                    placeholder="Adres"
                                />
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
