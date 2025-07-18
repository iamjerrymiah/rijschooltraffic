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

export default function Section1() {
    return (
        // <Container>
        <Box my={10}>
            <Section
                leftContent={
                    <VStack align="start">
                        <Heading size="lg">
                            Actie! De eerste 10 lessen voor maar
                            <Text ml={1} as="span" color="#00AEEF">
                                €450,-
                            </Text>
                        </Heading>

                        <Text fontSize="14px">
                            Naast de standaardpakketten die wij aanbieden loopt
                            er momenteel ook een tijdelijke actie bij ons.{" "}
                            <br />
                            <Text as="b">
                                Met onze pakketten bespaar je maar liefst €100,-
                            </Text>
                        </Text>
                        <Text
                            fontSize="12px"
                            fontStyle="italic"
                            color="gray.600"
                        >
                            *de actie is alleen geldig voor beginnende
                            leerlingen.
                        </Text>
                        <Text fontSize="14px">
                            Bekijk hier de{" "}
                            <Text
                                as="span"
                                color="orange.500"
                                fontWeight="bold"
                            >
                                actievoorwaarden
                            </Text>
                        </Text>

                        <VStack align="start" pt={2}>
                            {[
                                "Goedkoopste van Nederland",
                                "10 rijlessen (5 blokuren van 100 min)",
                                "€45,- per rijles",
                                "Beperkt aantal plekken beschikbaar"
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

                        <Text fontWeight="medium" mt={4}>
                            Meld je snel aan want vol = vol!
                        </Text>

                        <Box display="flex" gap={4}>
                            <Button
                                fontSize={"12px"}
                                fontWeight={400}
                                leftIcon={
                                    <Icon
                                        as={
                                            MdPhone as unknown as React.ElementType
                                        }
                                    />
                                }
                                colorScheme="blue"
                            >
                                085 060 41 10
                            </Button>
                            <Button
                                fontSize={"12px"}
                                fontWeight={400}
                                colorScheme="orange"
                            >
                                Direct aanmelden
                            </Button>
                        </Box>
                    </VStack>
                }
                rightContent={
                    <Box borderRadius="lg" overflow="hidden" w="100%">
                        <Image src={imagery} alt="" w="100%" h="auto" />
                    </Box>
                }
            />
        </Box>
        // </Container>
    );
}
